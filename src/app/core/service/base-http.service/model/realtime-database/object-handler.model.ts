import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

import { dbTimeObject } from './db.time.function';

export class ObjectHandler {
  url: string;
  _fireObject: AngularFireObject<{}>;
  constructor(private _db: AngularFireDatabase, private _url) {
    this.url = _url;
    this._fireObject = this._db.object(_url);
  }
  // get data
  get(isKey = true) {
    return isKey ?
      this._fireObject.snapshotChanges().map(action => ({ id: action.key, ...action.payload.val() })) :
      this._fireObject.valueChanges();
  }
  // 刪除
  delete(): Observable<any> {
    return Observable.fromPromise(this._fireObject.remove());
  }
  // 修改
  update<T>(data: T) {
    return Observable.fromPromise(this._fireObject.update(dbTimeObject(data, false)));
  }
  // 設定
  set<T>(data: T) {
    return Observable.fromPromise(this._fireObject.set(dbTimeObject(data, false)));
  }
}
