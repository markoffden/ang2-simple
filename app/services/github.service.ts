import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
    private username:string;
    private client_id = 'f48db09a4c5ef13f1b2a';
    private client_secret = 'fdc977062803f98e06efca735163d9b97996dacd';

    constructor(private _http: Http) {
        console.log('Github service is running...');
        this.username = 'markoffden';
    }

    getUser() {
        return this._http.get('http://api.github.com/users/' + this.username + '?client_id=' + this.client_id + '&client_secret=' + this.client_secret)
            .map(res => res.json());
    }

    getRepos() {
        return this._http.get('http://api.github.com/users/' + this.username + '/repos?client_id=' + this.client_id + '&client_secret=' + this.client_secret)
            .map(res => res.json());
    }

    updateUsername(username: string) {
        this.username = username;
    }
}
