/**
 * Created by Weex.
 * Copyright (c) 2016, Alibaba, Inc. All rights reserved.
 *
 * This source code is licensed under the Apache Licence 2.0.
 * For the full copyright and license information,please view the LICENSE file in the root directory of this source tree.
 */

#import "WXLinkComponent.h"
#import "WXNavigationProtocol.h"
#import "WXHandlerFactory.h"
#import "WXLog.h"
#import "WXComponent+Events.h"
#import "WXConvert.h"
#import "WXRouteManager.h"

#define CURRENT_IP @"your computer device ip"

#if TARGET_IPHONE_SIMULATOR
#define DEMO_HOST @"127.0.0.1"
#else
#define DEMO_HOST CURRENT_IP
#endif

#define DEMO_URL(path) [NSString stringWithFormat:@"http://%@:12580/%s", DEMO_HOST, #path]

#if DEBUG
#define Link_URL [NSString stringWithFormat:@"http://%@:12580/examples/build/route/app", DEMO_HOST]
#else
#define Link_URL [NSString stringWithFormat:@"file://%@/bundlejs/app",[NSBundle mainBundle].bundlePath]  // 测试
#endif

@interface WXLinkComponent()

@property (nonatomic, strong) UITapGestureRecognizer *tap;
@property (nonatomic, strong) NSString *to;

@end

@implementation WXLinkComponent

- (instancetype)initWithRef:(NSString *)ref type:(NSString *)type styles:(NSDictionary *)styles attributes:(NSDictionary *)attributes events:(NSArray *)events weexInstance:(WXSDKInstance *)weexInstance
{
    self = [super initWithRef:ref type:type styles:styles attributes:attributes events:events weexInstance:weexInstance];
    if (self) {
        _tap = [[UITapGestureRecognizer alloc] initWithTarget:self action:@selector(openTo)];
        _tap.delegate = self;
        if (attributes[@"to"]) {
            _to = attributes[@"to"];
        }
    }
    return self;
}

- (void)dealloc
{
    if (_tap.delegate) {
        _tap.delegate = nil;
    }
}

- (void)viewDidLoad
{
    [self.view addGestureRecognizer:_tap];
}


//重写render
- (void)openTo
{
    WXRouteManager *routeManager = [WXRouteManager sharedInstance];
    routeManager.to = _to;
    NSString *str = Link_URL;
    NSString *url = [NSString stringWithFormat:@"%@.js?route=%@",Link_URL,[WXConvert NSString:_to]];
    if (url && [url length] > 0) {
        id<WXNavigationProtocol> navigationHandler = [WXHandlerFactory handlerForProtocol:@protocol(WXNavigationProtocol)];
        if ([navigationHandler respondsToSelector:@selector(pushViewControllerWithParam:
                                                            completion:
                                                            withContainer:)]) {
            __weak typeof(self) weexSelf = self;
            [navigationHandler pushViewControllerWithParam:@{@"url":url} completion:^(NSString *code, NSDictionary *responseData) {
                WXLogDebug(@"Push success -> %@", url);
            } withContainer:self.weexInstance.viewController];
        } else {
            WXLogError(@"Event handler of class %@ does not respond to pushViewControllerWithParam", NSStringFromClass([navigationHandler class]));
        }
    }
}

- (void)updateAttributes:(NSDictionary *)attributes
{
    if (attributes[@"to"]) {
        _to = attributes[@"to"];
    }
}

#pragma mark
#pragma gesture delegate

- (BOOL)gestureRecognizer:(UIGestureRecognizer *)gestureRecognizer shouldRecognizeSimultaneouslyWithGestureRecognizer:(UIGestureRecognizer *)otherGestureRecognizer
{
    if ([gestureRecognizer isKindOfClass:[UITapGestureRecognizer class]] && [otherGestureRecognizer isKindOfClass:[UITapGestureRecognizer class]]) {
        return YES;
    }
    
    return NO;
}

@end
