/**
 * Created by Weex.
 * Copyright (c) 2016, Alibaba, Inc. All rights reserved.
 *
 * This source code is licensed under the Apache Licence 2.0.
 * For the full copyright and license information,please view the LICENSE file in the root directory of this source tree.
 */

#import "WXMatchComponent.h"

@interface WXMatchComponent()

@property (nonatomic, copy) NSString *pattern;

@end

@implementation WXMatchComponent

- (instancetype)initWithRef:(NSString *)ref type:(NSString *)type styles:(NSDictionary *)styles attributes:(NSDictionary *)attributes events:(NSArray *)events weexInstance:(WXSDKInstance *)weexInstance
{
    if (self = [super initWithRef:ref type:type styles:styles attributes:attributes events:events weexInstance:weexInstance]) {
        self.pattern = attributes[@"pattern"];
    }
    return self;
}
- (void)updateAttributes:(NSDictionary *)attributes
{
    if (attributes[@"pattern"]) {
        self.pattern = attributes[@"pattern"];
    }
}

@end
