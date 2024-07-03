import axios from "axios";
import {from, mergeMap, reduce} from "rxjs";

const axiosInstance = axios.create({
	baseURL: 'http://94.228.123.140:8083/api/',
});

interface ResponseData {
  http_endpoint1: any;
  http_endpoint2: any;
  http_endpoint3: any;
  http_endpoint4: any;
}

const urls: string[] = [
	'http_endpoint1',
	'http_endpoint2',
	'http_endpoint3',
	'http_endpoint4',
]; 

const objRequest = {}

const responseAllData$ = from(urls).pipe(
	mergeMap(url => from(axiosInstance.post<ResponseData>(url, objRequest))),
	reduce((acc, response) => ({...acc, [response.config.url as string]: response.data}), {} as ResponseData),
);

responseAllData$.subscribe(console.log);