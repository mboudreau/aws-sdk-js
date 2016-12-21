import {HttpRequest} from './http_request';
/**
 * The low level HTTP client object, which changes implementation based on if it's running on Node or Browser
 */
export class HttpClient {
    /**
     * Returns an instance of the HttpClient.  Should not be used in production, only testing
     */
    static getInstance(): HttpClient;

    handleRequest():HttpRequest;
    writeBody():void;
    // sslAgent():SSLAgent
    // progressStream:TransformStream
}