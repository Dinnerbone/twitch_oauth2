var searchIndex = JSON.parse('{\
"twitch_oauth2":{"doc":"github crates-io docs-rs","i":[[3,"AppAccessToken","twitch_oauth2","An App Access Token from the OAuth client credentials flow",null,null],[3,"UserToken","","An User Token from the OAuth implicit code flow or OAuth…",null,null],[3,"ValidatedToken","","Token validation returned from…",null,null],[12,"client_id","","Client ID associated with the token. Twitch requires this…",0,null],[12,"login","","Username associated with the token",0,null],[12,"user_id","","User ID associated with the token",0,null],[12,"scopes","","Scopes attached to the token.",0,null],[4,"Scope","","Scopes for twitch.",null,null],[13,"AnalyticsReadExtensions","","View analytics data for your extensions.",1,null],[13,"AnalyticsReadGames","","View analytics data for your games.",1,null],[13,"BitsRead","","View bits information for your channel.",1,null],[13,"ChannelSubscriptions","","[DEPRECATED] Read all subscribers to your channel.",1,null],[13,"ChannelEditCommercial","","Start a commercial on authorized channels",1,null],[13,"ChannelManageBroadcast","","Manage your channel’s broadcast configuration, including…",1,null],[13,"ChannelManageExtension","","Manage your channel’s extension configuration, including…",1,null],[13,"ChannelModerate","","Perform moderation actions in a channel",1,null],[13,"ChannelReadHypeTrain","","Read hype trains",1,null],[13,"ChannelReadRedemptions","","View your channel points custom reward redemptions",1,null],[13,"ChannelReadSubscriptions","","Get a list of all subscribers to your channel and check if…",1,null],[13,"ChatEdit","","Send live Stream Chat and Rooms messages",1,null],[13,"ChatRead","","View live Stream Chat and Rooms messages",1,null],[13,"ClipsEdit","","Create and edit clips as a specific user.",1,null],[13,"ModerationRead","","View your channel\'s moderation data including Moderators,…",1,null],[13,"UserEdit","","Manage a user object.",1,null],[13,"UserEditBroadcast","","Edit your channel\'s broadcast configuration, including…",1,null],[13,"UserEditFollows","","Edit your follows.",1,null],[13,"UserReadBroadcast","","View your broadcasting configuration, including extension…",1,null],[13,"UserReadEmail","","Read authorized user\'s email address.",1,null],[13,"UserReadStreamKey","","Read authorized user’s stream key.",1,null],[13,"WhispersEdit","","Send whisper messages.",1,null],[13,"WhispersRead","","View your whisper messages.",1,null],[13,"Other","","Other scope that is not implemented.",1,null],[5,"validate_token","","Validate this token.",null,[[["accesstoken",3]]]],[5,"revoke_token","","Revoke the token.",null,[[["accesstoken",3],["clientid",3]]]],[5,"refresh_token","","Refresh the token, call if it has expired.",null,[[["clientsecret",3],["clientid",3],["refreshtoken",3]]]],[0,"client","","Provides different http clients",null,null],[5,"reqwest_http_client","twitch_oauth2::client","",null,[[["httprequest",3]]]],[4,"SurfError","","Possible errors for [surf_http_client][http_client]",null,null],[13,"Surf","","surf failed to do the request: {0}",2,null],[13,"InvalidHeaderValue","","could not construct header value",2,null],[13,"InvalidHeaderName","","could not construct header name",2,null],[5,"surf_http_client","","Asynchronous HTTP client using [Surf][surf::Client]",null,[[["httprequest",3]]]],[0,"id","twitch_oauth2","Representation of oauth2 flow in `id.twitch.tv`",null,null],[3,"TwitchTokenResponse","twitch_oauth2::id","Twitch\'s representation of the oauth flow.",null,null],[12,"access_token","","Access token",3,null],[12,"token_type","","Token type",3,null],[12,"expires_in","","Time (in seconds) until token expires",3,null],[12,"refresh_token","","Token that can be used to refresh",3,null],[12,"scopes","","Scopes attached to token",3,null],[12,"extra_fields","","Extras",3,null],[3,"TwitchTokenErrorResponse","","Twitch\'s representation of the oauth flow for errors",null,null],[12,"status","","Status code of error",4,null],[12,"message","","Message attached to error",4,null],[6,"TwitchClient","","Client for Twitch OAuth2",null,null],[0,"scopes","twitch_oauth2","Module for all possible scopes in twitch.",null,null],[4,"Scope","twitch_oauth2::scopes","Scopes for twitch.",null,null],[13,"AnalyticsReadExtensions","","View analytics data for your extensions.",1,null],[13,"AnalyticsReadGames","","View analytics data for your games.",1,null],[13,"BitsRead","","View bits information for your channel.",1,null],[13,"ChannelSubscriptions","","[DEPRECATED] Read all subscribers to your channel.",1,null],[13,"ChannelEditCommercial","","Start a commercial on authorized channels",1,null],[13,"ChannelManageBroadcast","","Manage your channel’s broadcast configuration, including…",1,null],[13,"ChannelManageExtension","","Manage your channel’s extension configuration, including…",1,null],[13,"ChannelModerate","","Perform moderation actions in a channel",1,null],[13,"ChannelReadHypeTrain","","Read hype trains",1,null],[13,"ChannelReadRedemptions","","View your channel points custom reward redemptions",1,null],[13,"ChannelReadSubscriptions","","Get a list of all subscribers to your channel and check if…",1,null],[13,"ChatEdit","","Send live Stream Chat and Rooms messages",1,null],[13,"ChatRead","","View live Stream Chat and Rooms messages",1,null],[13,"ClipsEdit","","Create and edit clips as a specific user.",1,null],[13,"ModerationRead","","View your channel\'s moderation data including Moderators,…",1,null],[13,"UserEdit","","Manage a user object.",1,null],[13,"UserEditBroadcast","","Edit your channel\'s broadcast configuration, including…",1,null],[13,"UserEditFollows","","Edit your follows.",1,null],[13,"UserReadBroadcast","","View your broadcasting configuration, including extension…",1,null],[13,"UserReadEmail","","Read authorized user\'s email address.",1,null],[13,"UserReadStreamKey","","Read authorized user’s stream key.",1,null],[13,"WhispersEdit","","Send whisper messages.",1,null],[13,"WhispersRead","","View your whisper messages.",1,null],[13,"Other","","Other scope that is not implemented.",1,null],[11,"all","","Get a vec of all defined twitch [Scopes][Scope].",1,[[],[["scope",4],["vec",3]]]],[11,"parse","","Make a scope from string",1,[[],["scope",4]]],[11,"as_oauth_scope","","Get [Scope] as an oauth2 Scope",1,[[],["scope",3]]],[0,"tokens","twitch_oauth2","Twitch token types",null,null],[3,"AppAccessToken","twitch_oauth2::tokens","An App Access Token from the OAuth client credentials flow",null,null],[3,"UserToken","","An User Token from the OAuth implicit code flow or OAuth…",null,null],[3,"ValidatedToken","","Token validation returned from…",null,null],[12,"client_id","","Client ID associated with the token. Twitch requires this…",0,null],[12,"login","","Username associated with the token",0,null],[12,"user_id","","User ID associated with the token",0,null],[12,"scopes","","Scopes attached to the token.",0,null],[11,"from_existing_unchecked","twitch_oauth2","Assemble token without checks.",5,[[["string",3],["accesstoken",3],["option",4],["option",4],["vec",3]],["appaccesstoken",3]]],[11,"from_existing","","Assemble token and validate it. Retrieves `client_id` and…",5,[[["accesstoken",3],["clientsecret",3]]]],[11,"get_app_access_token","","Generate app access token via OAuth client credentials flow",5,[[["clientid",3],["scope",4],["clientsecret",3],["vec",3]]]],[0,"errors","twitch_oauth2::tokens","Errors",null,null],[4,"TokenError","twitch_oauth2::tokens::errors","General errors for talking with twitch, currently only…",null,null],[13,"Request","","request for token failed. {0}",6,null],[13,"ParseError","","could not parse url",6,null],[13,"ValidationError","","could not get validation for token",6,null],[4,"ValidationError","","Errors for [validate_token][crate::validate_token]",null,null],[13,"DeserializeError","","deserializations failed",7,null],[13,"NotAuthorized","","token is not authorized for use",7,null],[13,"TwitchError","","twitch returned an unexpected status: {0}",7,null],[13,"Request","","failed to request validation: {0}",7,null],[4,"RevokeTokenError","","Errors for [revoke_token][crate::revoke_token]",null,null],[13,"BadRequest","","400 Bad Request: {0}",8,null],[13,"RequestError","","failed to do revokation: {0}",8,null],[13,"Other","","got unexpected return: {0:?}",8,null],[4,"RefreshTokenError","","Errors for…",null,null],[13,"RequestError","","request for token failed. {0}",9,null],[13,"ParseError","","could not parse url",9,null],[13,"NoRefreshToken","","no refresh token found",9,null],[11,"from_existing_unchecked","twitch_oauth2","Assemble token without checks.",10,[[["string",3],["option",4],["option",4],["vec",3]],["usertoken",3]]],[11,"from_existing","","Assemble token and validate it. Retrieves `login`,…",10,[[["accesstoken",3]]]],[8,"TwitchToken","twitch_oauth2::tokens","Trait for twitch tokens to get fields and generalize over…",null,null],[10,"client_id","","Get the client-id. Twitch requires this in all helix api…",11,[[],["clientid",3]]],[10,"token","","Get the [AccessToken] for authenticating",11,[[],["accesstoken",3]]],[10,"login","","Get the username associated to this token",11,[[],["option",4]]],[10,"refresh_token","","Refresh this token, changing the token to a newer one",11,[[],[["pin",3],["box",3]]]],[10,"expires","","Get instant when token will expire.",11,[[],[["instant",3],["option",4]]]],[10,"scopes","","Retrieve scopes attached to the token",11,[[],["option",4]]],[11,"validate_token","","Validate this token. Should be checked on regularly,…",11,[[],[["pin",3],["box",3]]]],[11,"revoke_token","","Revoke the token. See…",11,[[],[["box",3],["pin",3]]]],[8,"TwitchToken","twitch_oauth2","Trait for twitch tokens to get fields and generalize over…",null,null],[10,"client_id","","Get the client-id. Twitch requires this in all helix api…",11,[[],["clientid",3]]],[10,"token","","Get the [AccessToken] for authenticating",11,[[],["accesstoken",3]]],[10,"login","","Get the username associated to this token",11,[[],["option",4]]],[10,"refresh_token","","Refresh this token, changing the token to a newer one",11,[[],[["pin",3],["box",3]]]],[10,"expires","","Get instant when token will expire.",11,[[],[["instant",3],["option",4]]]],[10,"scopes","","Retrieve scopes attached to the token",11,[[],["option",4]]],[11,"validate_token","","Validate this token. Should be checked on regularly,…",11,[[],[["pin",3],["box",3]]]],[11,"revoke_token","","Revoke the token. See…",11,[[],[["box",3],["pin",3]]]],[11,"from","","",5,[[]]],[11,"into","","",5,[[]]],[11,"to_owned","","",5,[[]]],[11,"clone_into","","",5,[[]]],[11,"borrow","","",5,[[]]],[11,"borrow_mut","","",5,[[]]],[11,"try_from","","",5,[[],["result",4]]],[11,"try_into","","",5,[[],["result",4]]],[11,"type_id","","",5,[[],["typeid",3]]],[11,"vzip","","",5,[[]]],[11,"from","","",10,[[]]],[11,"into","","",10,[[]]],[11,"to_owned","","",10,[[]]],[11,"clone_into","","",10,[[]]],[11,"borrow","","",10,[[]]],[11,"borrow_mut","","",10,[[]]],[11,"try_from","","",10,[[],["result",4]]],[11,"try_into","","",10,[[],["result",4]]],[11,"type_id","","",10,[[],["typeid",3]]],[11,"vzip","","",10,[[]]],[11,"from","twitch_oauth2::tokens","",0,[[]]],[11,"into","","",0,[[]]],[11,"to_owned","","",0,[[]]],[11,"clone_into","","",0,[[]]],[11,"borrow","","",0,[[]]],[11,"borrow_mut","","",0,[[]]],[11,"try_from","","",0,[[],["result",4]]],[11,"try_into","","",0,[[],["result",4]]],[11,"type_id","","",0,[[],["typeid",3]]],[11,"vzip","","",0,[[]]],[11,"from","twitch_oauth2::scopes","",1,[[]]],[11,"into","","",1,[[]]],[11,"to_owned","","",1,[[]]],[11,"clone_into","","",1,[[]]],[11,"to_string","","",1,[[],["string",3]]],[11,"borrow","","",1,[[]]],[11,"borrow_mut","","",1,[[]]],[11,"try_from","","",1,[[],["result",4]]],[11,"try_into","","",1,[[],["result",4]]],[11,"type_id","","",1,[[],["typeid",3]]],[11,"equivalent","","",1,[[]]],[11,"vzip","","",1,[[]]],[11,"from","twitch_oauth2::client","",2,[[]]],[11,"into","","",2,[[]]],[11,"to_string","","",2,[[],["string",3]]],[11,"borrow","","",2,[[]]],[11,"borrow_mut","","",2,[[]]],[11,"try_from","","",2,[[],["result",4]]],[11,"try_into","","",2,[[],["result",4]]],[11,"type_id","","",2,[[],["typeid",3]]],[11,"vzip","","",2,[[]]],[11,"from","twitch_oauth2::id","",3,[[]]],[11,"into","","",3,[[]]],[11,"to_owned","","",3,[[]]],[11,"clone_into","","",3,[[]]],[11,"borrow","","",3,[[]]],[11,"borrow_mut","","",3,[[]]],[11,"try_from","","",3,[[],["result",4]]],[11,"try_into","","",3,[[],["result",4]]],[11,"type_id","","",3,[[],["typeid",3]]],[11,"vzip","","",3,[[]]],[11,"from","","",4,[[]]],[11,"into","","",4,[[]]],[11,"to_owned","","",4,[[]]],[11,"clone_into","","",4,[[]]],[11,"to_string","","",4,[[],["string",3]]],[11,"borrow","","",4,[[]]],[11,"borrow_mut","","",4,[[]]],[11,"try_from","","",4,[[],["result",4]]],[11,"try_into","","",4,[[],["result",4]]],[11,"type_id","","",4,[[],["typeid",3]]],[11,"vzip","","",4,[[]]],[11,"from","twitch_oauth2::tokens::errors","",6,[[]]],[11,"into","","",6,[[]]],[11,"to_string","","",6,[[],["string",3]]],[11,"borrow","","",6,[[]]],[11,"borrow_mut","","",6,[[]]],[11,"try_from","","",6,[[],["result",4]]],[11,"try_into","","",6,[[],["result",4]]],[11,"type_id","","",6,[[],["typeid",3]]],[11,"vzip","","",6,[[]]],[11,"from","","",7,[[]]],[11,"into","","",7,[[]]],[11,"to_string","","",7,[[],["string",3]]],[11,"borrow","","",7,[[]]],[11,"borrow_mut","","",7,[[]]],[11,"try_from","","",7,[[],["result",4]]],[11,"try_into","","",7,[[],["result",4]]],[11,"type_id","","",7,[[],["typeid",3]]],[11,"vzip","","",7,[[]]],[11,"from","","",8,[[]]],[11,"into","","",8,[[]]],[11,"to_string","","",8,[[],["string",3]]],[11,"borrow","","",8,[[]]],[11,"borrow_mut","","",8,[[]]],[11,"try_from","","",8,[[],["result",4]]],[11,"try_into","","",8,[[],["result",4]]],[11,"type_id","","",8,[[],["typeid",3]]],[11,"vzip","","",8,[[]]],[11,"from","","",9,[[]]],[11,"into","","",9,[[]]],[11,"to_string","","",9,[[],["string",3]]],[11,"borrow","","",9,[[]]],[11,"borrow_mut","","",9,[[]]],[11,"try_from","","",9,[[],["result",4]]],[11,"try_into","","",9,[[],["result",4]]],[11,"type_id","","",9,[[],["typeid",3]]],[11,"vzip","","",9,[[]]],[11,"client_id","twitch_oauth2","",5,[[],["clientid",3]]],[11,"token","","",5,[[],["accesstoken",3]]],[11,"login","","",5,[[],["option",4]]],[11,"refresh_token","","",5,[[],[["pin",3],["box",3]]]],[11,"expires","","",5,[[],[["instant",3],["option",4]]]],[11,"scopes","","",5,[[],["option",4]]],[11,"client_id","","",10,[[],["clientid",3]]],[11,"token","","",10,[[],["accesstoken",3]]],[11,"login","","",10,[[],["option",4]]],[11,"refresh_token","","",10,[[],[["pin",3],["box",3]]]],[11,"expires","","",10,[[],[["instant",3],["option",4]]]],[11,"scopes","","",10,[[],["option",4]]],[11,"from","twitch_oauth2::client","",2,[[["invalidheadervalue",3]]]],[11,"from","","",2,[[["invalidheadername",3]]]],[11,"from","twitch_oauth2::scopes","",1,[[["scope",3]]]],[11,"from","","",1,[[["string",3]]]],[11,"from","twitch_oauth2::tokens::errors","",6,[[["parseerror",4]]]],[11,"from","","",6,[[["validationerror",4]]]],[11,"from","","",7,[[["error",3]]]],[11,"from","","",9,[[["parseerror",4]]]],[11,"clone","twitch_oauth2::id","",3,[[],["twitchtokenresponse",3]]],[11,"clone","","",4,[[],["twitchtokenerrorresponse",3]]],[11,"clone","twitch_oauth2::scopes","",1,[[],["scope",4]]],[11,"clone","twitch_oauth2","",5,[[],["appaccesstoken",3]]],[11,"clone","","",10,[[],["usertoken",3]]],[11,"clone","twitch_oauth2::tokens","",0,[[],["validatedtoken",3]]],[11,"eq","twitch_oauth2::scopes","",1,[[["scope",4]]]],[11,"ne","","",1,[[["scope",4]]]],[11,"fmt","twitch_oauth2::client","",2,[[["formatter",3]],["result",6]]],[11,"fmt","twitch_oauth2::id","",3,[[["formatter",3]],["result",6]]],[11,"fmt","","",4,[[["formatter",3]],["result",6]]],[11,"fmt","twitch_oauth2::scopes","",1,[[["formatter",3]],["result",6]]],[11,"fmt","twitch_oauth2","",5,[[["formatter",3]],["result",6]]],[11,"fmt","twitch_oauth2::tokens::errors","",6,[[["formatter",3]],["result",6]]],[11,"fmt","","",7,[[["formatter",3]],["result",6]]],[11,"fmt","","",8,[[["formatter",3]],["result",6]]],[11,"fmt","","",9,[[["formatter",3]],["result",6]]],[11,"fmt","twitch_oauth2","",10,[[["formatter",3]],["result",6]]],[11,"fmt","twitch_oauth2::tokens","",0,[[["formatter",3]],["result",6]]],[11,"fmt","twitch_oauth2::client","",2,[[["formatter",3]],["result",6]]],[11,"fmt","twitch_oauth2::id","",4,[[["formatter",3]],["result",6]]],[11,"fmt","twitch_oauth2::scopes","",1,[[["formatter",3]],["result",6]]],[11,"fmt","twitch_oauth2::tokens::errors","",6,[[["formatter",3]],["result",6]]],[11,"fmt","","",7,[[["formatter",3]],["result",6]]],[11,"fmt","","",8,[[["formatter",3]],["result",6]]],[11,"fmt","","",9,[[["formatter",3]],["result",6]]],[11,"source","twitch_oauth2::client","",2,[[],[["error",8],["option",4]]]],[11,"source","twitch_oauth2::tokens::errors","",6,[[],[["error",8],["option",4]]]],[11,"source","","",7,[[],[["error",8],["option",4]]]],[11,"source","","",8,[[],[["error",8],["option",4]]]],[11,"source","","",9,[[],[["error",8],["option",4]]]],[11,"serialize","twitch_oauth2::id","",3,[[],["result",4]]],[11,"serialize","","",4,[[],["result",4]]],[11,"serialize","twitch_oauth2::scopes","",1,[[],["result",4]]],[11,"deserialize","twitch_oauth2::id","",3,[[],["result",4]]],[11,"deserialize","","",4,[[],["result",4]]],[11,"deserialize","twitch_oauth2::scopes","",1,[[],["result",4]]],[11,"deserialize","twitch_oauth2::tokens","",0,[[],["result",4]]],[11,"access_token","twitch_oauth2::id","",3,[[],["accesstoken",3]]],[11,"token_type","","",3,[[]]],[11,"expires_in","","",3,[[],[["duration",3],["option",4]]]],[11,"refresh_token","","",3,[[],[["refreshtoken",3],["option",4]]]],[11,"scopes","","",3,[[],[["vec",3],["option",4]]]]],"p":[[3,"ValidatedToken"],[4,"Scope"],[4,"SurfError"],[3,"TwitchTokenResponse"],[3,"TwitchTokenErrorResponse"],[3,"AppAccessToken"],[4,"TokenError"],[4,"ValidationError"],[4,"RevokeTokenError"],[4,"RefreshTokenError"],[3,"UserToken"],[8,"TwitchToken"]]}\
}');
addSearchOptions(searchIndex);initSearch(searchIndex);