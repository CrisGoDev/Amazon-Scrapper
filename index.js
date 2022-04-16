const express= require('express');
const request= require('request-promise');


const app=express();

const PORT=process.env.PORT || 5000;


// const generateScraperurl(api_key=`http://api.scraperapi.com?api_key=${apikey}&autoparse=true`

const generateScraperurl=(apikey )=>`http://api.scraperapi.com?api_key=${apikey}&autoparse=true`






app.use(express.json());

app.get('/',(req,res)=>{
    res.send('Welcome to AMazon Scraper API');

});
// const apikey='0efe0388318ffc9b5d8426a72c08089c';

//GET Product Details
app.get('/products/:productId',async(req,res)=>{
    const {productId}=req.params;
    const { api_key } = req.query;

    try{
        const response= await request(`${generateScraperurl(api_key)}&url=https://www.amazon.com/dp/${productId}`)
        res.json(JSON.parse(response));

    }catch(error){
        res.json(error)
    }
})


// GET Products Review

app.get('/products/:productId/review',async(req,res)=>{
    const {productId}=req.params;
    const { api_key } = req.query;

    try{
        const response= await request(`${generateScraperurl(api_key)}&url=https://www.amazon.com/product-reviews/${productId}`)
        res.json(JSON.parse(response));

    }catch(error){
        res.json(error)
    }
})


// GET Products Offers

app.get('/products/:productId/offers',async(req,res)=>{
    const {productId}=req.params;
    const { api_key } = req.query;

    try{
        const response= await request(`${generateScraperurl(api_key)}&url=https://www.amazon.com/gp/offer-listing/${productId}`)
        res.json(JSON.parse(response));

    }catch(error){
        res.json(error)
    }
})


// GET Search Resulst

app.get('/search/:searchQuery',async(req,res)=>{
    const {searchQuery}=req.params;
    const { api_key } = req.query;

    try{
        const response= await request(`${generateScraperurl(api_key)}&url=https://www.amazon.com/s?k=/${searchQuery}`)
        res.json(JSON.parse(response));

    }catch(error){
        res.json(error)
    }
})


app.listen(PORT,()=>console.log( `Server runing on port ${PORT}`));

