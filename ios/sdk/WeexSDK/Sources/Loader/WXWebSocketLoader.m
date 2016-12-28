/**
 * Created by Weex.
 * Copyright (c) 2016, Alibaba, Inc. All rights reserved.
 *
 * This source code is licensed under the Apache Licence 2.0.
 * For the full copyright and license information,please view the LICENSE file in the root directory of this source tree.
 */

#import "WXWebSocketLoader.h"
#import "WXWebSocketHandler.h"
#import "WXWebSocketModel.h"
#import "WXHandlerFactory.h"
#import "WXLog.h"

@interface WXWebSocketLoader () <WXWebSocketDelegate>
@property (nonatomic, strong) WXWebSocketModel *webSocketModel;
@end

@implementation WXWebSocketLoader

- (instancetype)initWithUrl:(NSString *)url protocol:(NSString *)protocol
{
    if (self = [super init]) {
        self.webSocketModel = [self webSocketModel];
        self.webSocketModel.url = url;
        self.webSocketModel.protocol = protocol;
    }
    return self;
}

-(WXWebSocketModel *)webSocketModel
{
    if(!_webSocketModel)
    {
        _webSocketModel = [WXWebSocketModel new];
    }
    return _webSocketModel;
}

- (void)open
{
    id<WXWebSocketHandler> requestHandler = [WXHandlerFactory handlerForProtocol:@protocol(WXWebSocketHandler)];
    if (requestHandler) {
        [requestHandler open:self.webSocketModel withDelegate:self];
    } else {
        WXLogError(@"No resource request handler found!");
    }
}

- (void)send:(NSString *)data
{
    id<WXWebSocketHandler> requestHandler = [WXHandlerFactory handlerForProtocol:@protocol(WXWebSocketHandler)];
    if (requestHandler) {
        [requestHandler send:data];
    } else {
        WXLogError(@"No resource request handler found!");
    }
}

- (void)close
{
    id<WXWebSocketHandler> requestHandler = [WXHandlerFactory handlerForProtocol:@protocol(WXWebSocketHandler)];
    if (requestHandler) {
        [requestHandler close];
    } else {
        WXLogError(@"No resource request handler found!");
    }
}

- (void)close:(NSString *)code reason:(NSString *)reason
{
    id<WXWebSocketHandler> requestHandler = [WXHandlerFactory handlerForProtocol:@protocol(WXWebSocketHandler)];
    if (requestHandler) {
        [requestHandler close:code reason:reason];
    } else {
        WXLogError(@"No resource request handler found!");
    }
}

#pragma mark - WXWebSocketDelegate
- (void)webSocketDidOpen:(WXWebSocketModel *)webSocketModel
{
    if (self.onOpen) {
        self.onOpen();
    }
}
- (void)webSocket:(WXWebSocketModel *)webSocketModel didFailWithError:(NSError *)error
{
    if(self.onFail) {
        self.onFail(error);
    }
}
- (void)webSocket:(WXWebSocketModel *)webSocketModel didReceiveMessage:(id)message
{
    if (self.onReceiveMessage) {
        self.onReceiveMessage(message);
    }
}
- (void)webSocket:(WXWebSocketModel *)webSocketModel didCloseWithCode:(NSInteger)code reason:(NSString *)reason wasClean:(BOOL)wasClean
{
    if (self.onClose) {
        self.onClose(code,reason,wasClean);
    }
}
@end
