type WeakRefObject<RecordType extends Record<string, object>> = {
  [P in keyof RecordType]: WeakRef<RecordType[P]>;
};

export class WeakRefObjectMap<RecordType extends Record<string, object>>
  implements Map<string, RecordType> {
  private map = new Map<string, WeakRefObject<RecordType>>();

  set(key: string, value: RecordType): this {
    const weakRefValue = Object.fromEntries(
      Object.entries(value).map(([k, v]) => {
        if (typeof v !== 'object' || v === null) {
          throw new Error(`Property ${k} is not an object and cannot be weakly referenced.`);
        }
        return [k, new WeakRef(v)];
      }),
    ) as WeakRefObject<RecordType>;
    this.map.set(key, weakRefValue);
    return this;
  }

  get(key: string): RecordType | undefined {
    const weakRefs = this.map.get(key);
    if (!weakRefs) return undefined;

    const derefObj: Partial<RecordType> = {};
    for (const keyValue in weakRefs) {
      if (!Object.prototype.hasOwnProperty.call(weakRefs, keyValue)) continue;
      const ref = weakRefs[keyValue].deref();
      if (ref === undefined) {
        this.map.delete(key);
        return undefined;
      }
      derefObj[keyValue] = ref;
    }
    return derefObj as RecordType;
  }

  has(key: string): boolean {
    return this.get(key) !== undefined;
  }

  delete(key: string): boolean {
    return this.has(key) ? this.map.delete(key) : false;
  }

  clear(): void {
    this.map.clear();
  }

  get size(): number {
    return this.map.size;
  }

  *entries(): IterableIterator<[string, RecordType]> {
    for (const key of this.map.keys()) {
      const val = this.get(key);
      if (val !== undefined) yield [key, val];
    }
  }

  
   keys(): IterableIterator<string> { 
    	return	this.map.keys() 
   }


  
   *values(): IterableIterator<RecordType> { 
    	for(const key of	this.map.keys()){
        	const val=this.get(	key	)
         	if(val!==undefined)
            	yield	val
      	}
   }


  
   [Symbol.iterator]():IterableIterator<[string ,RecordType]>{
    	return	this.entries()
   }


  
   get[Symbol.toStringTag](){return'WeakRefObjectMap'}
  

   
forEach(
callback:(value:RecordType,key:string,map:Map<string ,RecordType>)=>void,
thisArg?:any,
){
for(const [key,value]of	this.entries()){
	if(thisArg){
		callback.call(thisArg,value,key,this)
	}else{
	callback(value,key,this)
}
}
}
}
