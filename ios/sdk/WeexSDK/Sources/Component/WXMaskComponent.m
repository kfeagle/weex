/**
 * Created by Weex.
 * Copyright (c) 2016, Alibaba, Inc. All rights reserved.
 *
 * This source code is licensed under the Apache Licence 2.0.
 * For the full copyright and license information,please view the LICENSE file in the root directory of this source tree.
 */

#import "WXMaskComponent.h"

@interface WXMaskView : UIView

@end

@implementation WXMaskView

- (void)willMoveToSuperview:(UIView *)newSuperview
{
    [super willMoveToSuperview:newSuperview];
    UIWindow *window = [UIApplication sharedApplication].keyWindow;
    if(self.superview == window) {
        return;
    }

}

-(void)didMoveToSuperview
{
    [super didMoveToSuperview];
    UIWindow *window = [UIApplication sharedApplication].keyWindow;
    if(self.superview == window) {
        return;
    }else {
        [self removeFromSuperview];
        UIWindow *window = [UIApplication sharedApplication].keyWindow;
        [window addSubview:self];
    }
}

@end

@implementation WXMaskComponent

- (UIView *)loadView
{
    return [WXMaskView new];
}

@end
