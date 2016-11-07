/**
 * Created by Weex.
 * Copyright (c) 2016, Alibaba, Inc. All rights reserved.
 *
 * This source code is licensed under the Apache Licence 2.0.
 * For the full copyright and license information,please view the LICENSE file in the root directory of this source tree.
 */

#import "WXRouteManager.h"


static WXRouteManager *_sharedInstance;

@interface WXRouteManager()

@end

@implementation WXRouteManager

+ (id) sharedInstance
{
    
    static dispatch_once_t predicate;
    dispatch_once(&predicate, ^{
        _sharedInstance = [[WXRouteManager alloc] init];
    });
    return _sharedInstance;
}

- (id) init
{
    self = [super init];
    if ( self )
    {
    }
    return self;
}

@end
