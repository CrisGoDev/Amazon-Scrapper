const express= require('express');
const request= require('request-promise');


const app=express();

const PORT=process.env.PORT || 5000;


// const generateScraperurl(apikey)=`http://api.scraperapi.com?api_key=${apikey}&autoparse=true`

const generateScraperurl=(apikey)=>`http://api.scraperapi.com?api_key=${apikey}&autoparse=true`






app.use(express.json());

app.get('/',(req,res)=>{
    res.send('Welcome to AMazon Scraper API');

});


//GET Product Details
app.get('/products/:productId',async(req,res)=>{
    const {productId}=req.params;
    const {apikey}= req.query;

    try{
        const response= await request(`${generateScraperurl(apikey)}&url=https://www.amazon.com/dp/${productId}`)
        res.json(JSON.parse(response));

    }catch(error){
        res.json(error)
    }
})


// GET Products Review

app.get('/products/:productId/review',async(req,res)=>{
    const {productId}=req.params;
    const {apikey}= req.query;

    try{
        const response= await request(`${generateScraperurl(apikey)}&url=https://www.amazon.com/product-reviews/${productId}`)
        res.json(JSON.parse(response));

    }catch(error){
        res.json(error)
    }
})


// GET Products Offers

app.get('/products/:productId/offers',async(req,res)=>{
    const {productId}=req.params;
    const {apikey}= req.query;

    try{
        const response= await request(`${generateScraperurl(apikey)}&url=https://www.amazon.com/gp/offer-listing/${productId}`)
        res.json(JSON.parse(response));

    }catch(error){
        res.json(error)
    }
})


// GET Search Resulst

app.get('/search/:searchQuery',async(req,res)=>{
    const {searchQuery}=req.params;
    const {apikey}= req.query;

    try{
        const response= await request(`${generateScraperurl(apikey)}&url=https://www.amazon.com/s?k=/${searchQuery}`)
        res.json(JSON.parse(response));

    }catch(error){
        res.json(error)
    }
})


app.listen(PORT,()=>console.log( `Server runing on port ${PORT}`));

