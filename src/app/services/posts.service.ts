import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PostsService{
    constructor(private http: Http){
        console.log('PostService Initialized...')
    }

    getPosts(){
        // return this.http.get('https://jsonplaceholder.typicode.com/photos')
        console.log(this.http.get('https://github.com/jmmanalo0131/heriko/blob/master/sample.json')
        .map(res => res.json()));
        return this.http.get('https://github.com/jmmanalo0131/heriko/blob/master/sample.json')
        .map(res => res.json());
    }
}
