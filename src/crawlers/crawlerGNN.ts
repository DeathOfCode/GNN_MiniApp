import cheerio from "cheerio";

async function getHtmlPageGNN() {
    return new Promise(async (resolve, reject) => {
      try {
        const url = 'https://thewateratlantic.com';
        const response = (await fetch(url));
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
           const data = await getHtmlPageGNN();
           console.log(data);
        } catch (e) {
          resolve('done error');
        }
      }); 
}
