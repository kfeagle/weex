/**
 * Created by Weex.
 * Copyright (c) 2016, Alibaba, Inc. All rights reserved.
 *
 * This source code is licensed under the Apache Licence 2.0.
 * For the full copyright and license information,please view the LICENSE file in the root directory of this source tree.
 */

#import "WXWebSocketModule.h"
#import "WXUtility.h"

@interface WXWebSocketModule()

@property(nonatomic,copy)WXModuleKeepAliveCallback errorCallBack;
@property(nonatomic,copy)WXModuleKeepAliveCallback messageCallBack;
@property(nonatomic,copy)WXModuleKeepAliveCallback openCallBack;
@property(nonatomic,copy)WXModuleKeepAliveCallback closeCallBack;

@end

@implementation WXWebSocketModule
{
    WXWebSocket *_webSocket;
}
WX_EXPORT_METHOD(@selector(WebSocket:protocol:))
WX_EXPORT_METHOD(@selector(send:))
WX_EXPORT_METHOD(@selector(close:reason:))
WX_EXPORT_METHOD(@selector(close))
WX_EXPORT_METHOD(@selector(onerror:))
WX_EXPORT_METHOD(@selector(onmessage:))
WX_EXPORT_METHOD(@selector(onopen:))
WX_EXPORT_METHOD(@selector(onclose:))

- (void)WebSocket:(NSString *)url protocol:(NSString *)protocol
{
    _webSocket.delegate = nil;
    [_webSocket close];
    _webSocket = [[WXWebSocket alloc] initWithURLRequest:[NSURLRequest requestWithURL:[NSURL URLWithString:url]]];
    _webSocket.delegate = self;
    [_webSocket open];
}

- (void)send:(NSString *)data
{
    [_webSocket send:data];
}

- (void)close
{
    [_webSocket close];
}

- (void)close:(NSString *)code reason:(NSString *)reason
{
    [_webSocket closeWithCode:code reason:reason];
}

- (void)onerror:(WXModuleKeepAliveCallback)callback
{
    self.errorCallBack = callback;
}

- (void)onmessage:(WXModuleKeepAliveCallback)callback
{
    self.messageCallBack = callback;
}

- (void)onopen:(WXModuleKeepAliveCallback)callback
{
    self.openCallBack = callback;
}

- (void)onclose:(WXModuleKeepAliveCallback)callback
{
    self.closeCallBack = callback;
}

#pragma mark - WXWebSocketDelegate

- (void)webSocketDidOpen:(WXWebSocket *)webSocket;
{
    WXLogInfo(@"Websocket open ");
    NSDictionary *dict = [NSDictionary new];
    self.openCallBack(@"open",true);
}

- (void)webSocket:(WXWebSocket *)webSocket didFailWithError:(NSError *)error;
{
    WXLogError(@":( Websocket Failed With Error %@", error);
    NSMutableDictionary *dict = [NSMutableDictionary new];
    [dict setObject:error.userInfo forKey:@"data"];
    self.errorCallBack(dict, true);
}

- (void)webSocket:(WXWebSocket *)webSocket didReceiveMessage:(id)message;
{
    WXLogInfo(@"Websocket receive ");
    NSMutableDictionary *dic = [NSMutableDictionary new];
    [dic setObject:message forKey:@"data"];
    self.messageCallBack(dic,true);
}
- (void)webSocket:(WXWebSocket *)webSocket didCloseWithCode:(NSInteger)code reason:(NSString *)reason wasClean:(BOOL)wasClean;
{
    WXLogInfo(@"Websocket colse ");
    NSMutableDictionary * callbackRsp = [[NSMutableDictionary alloc] init];
    [callbackRsp setObject:[NSNumber numberWithInteger:code] forKey:@"code"];
    [callbackRsp setObject:reason forKey:@"reason"];
    self.closeCallBack(callbackRsp,false);
}

@end
