import{g as m,c as d,B as c,X as h}from"./index-DdF625D9.js";const l={len:1,get:(t,a)=>({frameType:m(t,a,1,4)})},f=d("music-metadata:parser:AMR"),p=[12,13,15,17,19,20,26,31,5,0,0,0,0,0,0,0];class u extends c{async parse(){var n;if(await this.tokenizer.readToken(new h(5))!=="#!AMR")throw new Error("Invalid AMR file: invalid MAGIC number");this.metadata.setFormat("container","AMR"),this.metadata.setFormat("codec","AMR"),this.metadata.setFormat("sampleRate",8e3),this.metadata.setFormat("bitrate",64e3),this.metadata.setFormat("numberOfChannels",1);let i=0,r=0;const s=((n=this.tokenizer.fileInfo)==null?void 0:n.size)??Number.MAX_SAFE_INTEGER;if(this.options.duration){for(;this.tokenizer.position<s;){const o=await this.tokenizer.readToken(l),e=p[o.frameType];if(e>0){if(i+=e+1,i>s)break;await this.tokenizer.ignore(e),++r}else f(`Found no-data frame, frame-type: ${o.frameType}. Skipping`)}this.metadata.setFormat("duration",r*.02)}}}export{u as AmrParser};
