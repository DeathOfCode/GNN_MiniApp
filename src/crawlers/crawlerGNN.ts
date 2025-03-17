import * as cheerio from 'cheerio';
import axios from 'axios';

const baseUrl = 'http://thewateratlantic.com/';
async function getHtmlPageGNN() {
    return new Promise(async (resolve, reject) => {
      try {
        axios.get(baseUrl)
        .then(function (response) {
          // handle success
          console.log(response.data);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .finally(function () {
          // always executed
        });
        const response = (await fetch(baseUrl));
        if(response.ok){
           const text = await response.text();
           resolve(text);
        }else{
            reject(response);
        }
       
      } catch (e:any) {
        console.log(e);
        resolve('done error');
      }
    });
  }

export async function crawlData(){
    return new Promise(async (resolve, reject) => {
        try {
           const data:any = await getHtmlPageGNN();
           if(data){
            const pageLoad = cheerio.load(data);  
            resolve(pageLoad);
        }
        } catch (e) {
          resolve('done error');
        }
      }); 
}

export async function getBannerImages(pageLoad) {
    let imgages =  pageLoad('a.slideshow-image').find('img').toArray();
    const urlImgs =  imgages.map(x => `${baseUrl}/${x.attribs.src}`);
    return urlImgs;
} 
