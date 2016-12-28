/**
 * Created by Weex.
 * Copyright (c) 2016, Alibaba, Inc. All rights reserved.
 *
 * This source code is licensed under the Apache Licence 2.0.
 * For the full copyright and license information,please view the LICENSE file in the root directory of this source tree.
 */

#import "WXWebSocketDefaultImpl.h"
#import "SRWebSocket.h"

@interface WXWebSocketDefaultImpl()<SRWebSocketDelegate>

@end

@implementation WXWebSocketDefaultImpl
{
    SRWebSocket *webSocket;
    WXWebSocketModel *wsModel;
    id<WXWebSocketDelegate> wsDelegate;
}

#pragma mark - WXWebSocketHandler
- (void)open:(WXWebSocketModel *)webSocketModel withDelegate:(id<WXWebSocketDelegate>)delegate
{
    if(webSocket)
    {
        webSocket.delegate = nil;
        [webSocket close];
    }
    
    NSArray *protols;
    if([webSocketModel.protocol length]>0){
       protols = [NSArray arrayWithObject:webSocketModel.protocol];
    }
    webSocket = [[SRWebSocket alloc] initWithURL:[NSURL URLWithString:webSocketModel.url] protocols:protols];
    webSocket.delegate = self;
    [webSocket open];
    wsDelegate = delegate;
    wsModel = webSocketModel;
}

- (void)send:(NSString *)data
{
    [webSocket send:data];
}

- (void)close
{
    [webSocket close];
}

- (void)close:(NSString *)code reason:(NSString *)reason
{
    [webSocket closeWithCode:[code integerValue] reason:reason];
}


#pragma mark -SRWebSocketDelegate
- (void)webSocketDidOpen:(SRWebSocket *)webSocket;
{
    [wsDelegate webSocketDidOpen:wsModel];
}

- (void)webSocket:(SRWebSocket *)webSocket didFailWithError:(NSError *)error;
{
    [wsDelegate webSocket:wsModel didFailWithError:error];
}

- (void)webSocket:(SRWebSocket *)webSocket didReceiveMessage:(id)message;
{
    [wsDelegate webSocket:wsModel didReceiveMessage:message];
}

- (void)webSocket:(SRWebSocket *)webSocket didCloseWithCode:(NSInteger)code reason:(NSString *)reason wasClean:(BOOL)wasClean;
{
    [wsDelegate webSocket:wsModel didCloseWithCode:code reason:reason wasClean:wasClean];
}
@end
