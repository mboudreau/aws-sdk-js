
export class util {
    static engine():string;
    static userAgent():string;
    static isBrowser():boolean;
    static isNode():boolean;
    static uriEscape(uri:string):string;
    static uriEscapePath(path:string):string;
    static urlParse(url:string):Object;
    static urlFormat(url:string):Object;
    static queryStringParse(query:string):Object;
    static queryParamsToString(obj:Object):string;
    static readFileSync(path:string):any;
    static inherit(klass:any, features:Object):any;
}