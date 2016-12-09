/**
 * Created by Weex.
 * Copyright (c) 2016, Alibaba, Inc. All rights reserved.
 *
 * This source code is licensed under the Apache Licence 2.0.
 * For the full copyright and license information,please view the LICENSE file in the root directory of this source tree.
 */

#import <Foundation/Foundation.h>
#import <Security/SecCertificate.h>

typedef NS_ENUM(NSInteger, WXReadyState) {
    WX_CONNECTING   = 0,
    WX_OPEN         = 1,
    WX_CLOSING      = 2,
    WX_CLOSED       = 3,
};

typedef enum WXStatusCode : NSInteger {
    WXStatusCodeNormal = 1000,
    WXStatusCodeGoingAway = 1001,
    WXStatusCodeProtocolError = 1002,
    WXStatusCodeUnhandledType = 1003,
    // 1004 reserved.
    WXStatusNoStatusReceived = 1005,
    // 1004-1006 reserved.
    WXStatusCodeInvalidUTF8 = 1007,
    WXStatusCodePolicyViolated = 1008,
    WXStatusCodeMessageTooBig = 1009,
} WXStatusCode;

@class WXWebSocket;

extern NSString *const WXWebSocketErrorDomain;
extern NSString *const WXHTTPResponseErrorKey;

#pragma mark - WXWebSocketDelegate

@protocol WXWebSocketDelegate;

#pragma mark - WXWebSocket

@interface WXWebSocket : NSObject <NSStreamDelegate>

@property (nonatomic, weak) id <WXWebSocketDelegate> delegate;

@property (nonatomic, readonly) WXReadyState readyState;
@property (nonatomic, readonly, retain) NSURL *url;


@property (nonatomic, readonly) CFHTTPMessageRef receivedHTTPHeaders;

// Optional array of cookies (NSHTTPCookie objects) to apply to the connections
@property (nonatomic, readwrite) NSArray * requestCookies;

// This returns the negotiated protocol.
// It will be nil until after the handshake completes.
@property (nonatomic, readonly, copy) NSString *protocol;

// Protocols should be an array of strings that turn into Sec-WebSocket-Protocol.
- (id)initWithURLRequest:(NSURLRequest *)request protocols:(NSArray *)protocols allowsUntrustedSSLCertificates:(BOOL)allowsUntrustedSSLCertificates;
- (id)initWithURLRequest:(NSURLRequest *)request protocols:(NSArray *)protocols;
- (id)initWithURLRequest:(NSURLRequest *)request;

// Some helper constructors.
- (id)initWithURL:(NSURL *)url protocols:(NSArray *)protocols allowsUntrustedSSLCertificates:(BOOL)allowsUntrustedSSLCertificates;
- (id)initWithURL:(NSURL *)url protocols:(NSArray *)protocols;
- (id)initWithURL:(NSURL *)url;

// Delegate queue will be dispatch_main_queue by default.
// You cannot set both OperationQueue and dispatch_queue.
- (void)setDelegateOperationQueue:(NSOperationQueue*) queue;
- (void)setDelegateDispatchQueue:(dispatch_queue_t) queue;

// By default, it will schedule itself on +[NSRunLoop SR_networkRunLoop] using defaultModes.
- (void)scheduleInRunLoop:(NSRunLoop *)aRunLoop forMode:(NSString *)mode;
- (void)unscheduleFromRunLoop:(NSRunLoop *)aRunLoop forMode:(NSString *)mode;

// WXWebSockets are intended for one-time-use only.  Open should be called once and only once.
- (void)open;

- (void)close;
- (void)closeWithCode:(NSInteger)code reason:(NSString *)reason;

// Send a UTF8 String or Data.
- (void)send:(id)data;

// Send Data (can be nil) in a ping message.
- (void)sendPing:(NSData *)data;

@end

#pragma mark - WXWebSocketDelegate

@protocol WXWebSocketDelegate <NSObject>

// message will either be an NSString if the server is using text
// or NSData if the server is using binary.
- (void)webSocket:(WXWebSocket *)webSocket didReceiveMessage:(id)message;

@optional

- (void)webSocketDidOpen:(WXWebSocket *)webSocket;
- (void)webSocket:(WXWebSocket *)webSocket didFailWithError:(NSError *)error;
- (void)webSocket:(WXWebSocket *)webSocket didCloseWithCode:(NSInteger)code reason:(NSString *)reason wasClean:(BOOL)wasClean;
- (void)webSocket:(WXWebSocket *)webSocket didReceivePong:(NSData *)pongPayload;

@end

#pragma mark - NSURLRequest (CertificateAdditions)

@interface NSURLRequest (CertificateAdditions)

@property (nonatomic, retain, readonly) NSArray *WX_SSLPinnedCertificates;

@end

#pragma mark - NSMutableURLRequest (CertificateAdditions)

@interface NSMutableURLRequest (CertificateAdditions)

@property (nonatomic, retain) NSArray *WX_SSLPinnedCertificates;

@end

#pragma mark - NSRunLoop (WXWebSocket)

@interface NSRunLoop (WXWebSocket)

+ (NSRunLoop *)WX_networkRunLoop;

@end
