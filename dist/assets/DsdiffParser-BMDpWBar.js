import{F as s,n as f,c as z,B as w,d as I,o as S,f as D,b as c,a as u,U as p,S as b,m as g}from"./index-DdF625D9.js";import{I as C}from"./ID3v2Parser-DiCB71SA.js";const o={len:12,get:(h,e)=>({chunkID:s.get(h,e),chunkSize:f.get(h,e+4)})},a=z("music-metadata:parser:aiff");class d extends g("DSDIFF"){}class F extends w{async parse(){const e=await this.tokenizer.readToken(o);if(e.chunkID!=="FRM8")throw new d("Unexpected chunk-ID");const t=(await this.tokenizer.readToken(s)).trim();switch(t){case"DSD":return this.metadata.setFormat("container",`DSDIFF/${t}`),this.metadata.setFormat("lossless",!0),this.readFmt8Chunks(e.chunkSize-BigInt(s.len));default:throw new d(`Unsupported DSDIFF type: ${t}`)}}async readFmt8Chunks(e){for(;e>=o.len;){const t=await this.tokenizer.readToken(o);a(`Chunk id=${t.chunkID}`),await this.readData(t),e-=BigInt(o.len)+t.chunkSize}}async readData(e){a(`Reading data of chunk[ID=${e.chunkID}, size=${e.chunkSize}]`);const t=this.tokenizer.position;switch(e.chunkID.trim()){case"FVER":{const r=await this.tokenizer.readToken(D);a(`DSDIFF version=${r}`);break}case"PROP":{if(await this.tokenizer.readToken(s)!=="SND ")throw new d("Unexpected PROP-chunk ID");await this.handleSoundPropertyChunks(e.chunkSize-BigInt(s.len));break}case"ID3":{const r=await this.tokenizer.readToken(new I(Number(e.chunkSize))),n=S(r);await new C().parse(this.metadata,n,this.options);break}case"DSD":this.metadata.format.numberOfChannels&&this.metadata.setFormat("numberOfSamples",Number(e.chunkSize*BigInt(8)/BigInt(this.metadata.format.numberOfChannels))),this.metadata.format.numberOfSamples&&this.metadata.format.sampleRate&&this.metadata.setFormat("duration",this.metadata.format.numberOfSamples/this.metadata.format.sampleRate);break;default:a(`Ignore chunk[ID=${e.chunkID}, size=${e.chunkSize}]`);break}const i=e.chunkSize-BigInt(this.tokenizer.position-t);i>0&&(a(`After Parsing chunk, remaining ${i} bytes`),await this.tokenizer.ignore(Number(i)))}async handleSoundPropertyChunks(e){for(a(`Parsing sound-property-chunks, remainingSize=${e}`);e>0;){const t=await this.tokenizer.readToken(o);a(`Sound-property-chunk[ID=${t.chunkID}, size=${t.chunkSize}]`);const i=this.tokenizer.position;switch(t.chunkID.trim()){case"FS":{const n=await this.tokenizer.readToken(p);this.metadata.setFormat("sampleRate",n);break}case"CHNL":{const n=await this.tokenizer.readToken(c);this.metadata.setFormat("numberOfChannels",n),await this.handleChannelChunks(t.chunkSize-BigInt(c.len));break}case"CMPR":{const n=(await this.tokenizer.readToken(s)).trim(),k=await this.tokenizer.readToken(u),m=await this.tokenizer.readToken(new b(k,"ascii"));n==="DSD"&&(this.metadata.setFormat("lossless",!0),this.metadata.setFormat("bitsPerSample",1)),this.metadata.setFormat("codec",`${n} (${m})`);break}case"ABSS":{const n=await this.tokenizer.readToken(c),k=await this.tokenizer.readToken(u),m=await this.tokenizer.readToken(u),l=await this.tokenizer.readToken(p);a(`ABSS ${n}:${k}:${m}.${l}`);break}case"LSCO":{const n=await this.tokenizer.readToken(c);a(`LSCO lsConfig=${n}`);break}default:a(`Unknown sound-property-chunk[ID=${t.chunkID}, size=${t.chunkSize}]`),await this.tokenizer.ignore(Number(t.chunkSize))}const r=t.chunkSize-BigInt(this.tokenizer.position-i);r>0&&(a(`After Parsing sound-property-chunk ${t.chunkSize}, remaining ${r} bytes`),await this.tokenizer.ignore(Number(r))),e-=BigInt(o.len)+t.chunkSize,a(`Parsing sound-property-chunks, remainingSize=${e}`)}if(this.metadata.format.lossless&&this.metadata.format.sampleRate&&this.metadata.format.numberOfChannels&&this.metadata.format.bitsPerSample){const t=this.metadata.format.sampleRate*this.metadata.format.numberOfChannels*this.metadata.format.bitsPerSample;this.metadata.setFormat("bitrate",t)}}async handleChannelChunks(e){a(`Parsing channel-chunks, remainingSize=${e}`);const t=[];for(;e>=s.len;){const i=await this.tokenizer.readToken(s);a(`Channel[ID=${i}]`),t.push(i),e-=BigInt(s.len)}return a(`Channels: ${t.join(", ")}`),t}}export{d as DsdiffContentParseError,F as DsdiffParser};
