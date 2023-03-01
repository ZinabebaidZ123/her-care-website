
let brands=[
    {img:'aquaphor.png',url:'https://www.aquaphorus.com/'},{img:'aussie.png',url:'https://www.aussie.com/'},{img:'aveeno.png',url:'https://www.aveeno.com/'},{img:'bioderma.png',url:'https://www.bioderma.eg/'},
    {img:'carmex.png',url:'https://www.mycarmex.com/'},{img:'ceraVe.jpeg',url:'https://www.cerave.com/'},{img:'certaphil.jpeg',url:'https://www.cetaphil.com/'},
    {img:'clarins.png',url:'https://www.clarinsusa.com/'},{img:'clean$clear.png',url:'https://www.cleanandclear.com/'},{img:'differin.png',url:'https://eg.iherb.com/c/differin'},{img:'dove.jpeg',url:'https://www.dove.com'},
    {img:'elf.png',url:'https://www.elfcosmetics.com/'},{img:'eucerin.png',url:'https://www.eucerinus.com/'},{img:'fresh rose.jpeg',url:'https://www.fresh.com/'},
    {img:'jonson.png',url:'https://www.jnj.com/'},{img:'m,ane.png',url:'https://store.manentail.com/'},{img:'mac.png',url:'https://www.maccosmetics.com/'},{img:'maui.png',url:'https://www.mauimoisture.com/'},
    {img:'naturesLogo.jpeg',url:'https://www.naturesanswer.com/'},{img:'nublan.jpeg',url:'https://www.nubianheritage.com/'},{img:'nyx.png',url:'https://www.nyxcosmetics.com/'},
    {img:'o.p.i.png',url:'https://www.opi.com/'},{img:'Olaplex-Logo.png',url:'https://olaplex.com/'},{img:'vaaisil.jpeg',url:'https://www.vaseline.com/'}
    ,{img:'shea moistune.png',url:'https://www.sheamoisture.com/'},{img:'sugarbearhair.png',url:'https://www.sugarbearvitamincare.com/'},{img:'Vaseline.png',url:'https://www.vagisil.com/'}
    ,{img:'summersevecom.jpg',url:'https://www.summerseve.com/'},{img:'solrali.jpg',url:'https://www.sorali.co.za/'},{img:'sundown.jpeg',url:'https://www.sundownnutrition.com/'}
    ,{img:'crest.png',url:'https://crest.com/en-us'},{img:'neutrogena.jpg',url:'https://www.neutrogena.com/'},{img:'f&w.webp',url:'https://fairandwhite.com/'}
    ,
    {img:'ultra.jpeg',url:''},
    {img:'soap.jpeg',url:''},
    {img:'oznaturals.png',url:''},
    ];
    
    onload=display;
    let crands_row=document.getElementById('crands_row')
    
    function display(){
        let container=``;
    for(let i=0; i< brands.length;i++){
    container+=`
    <!-- start -->
       <div class="col-lg-3 col-md-4 col-sm-6">
        <div class="content p-2 brand-card  position-relative d-flex align-items-center justify-content-center rounded shadow">
                    <figure class="brans__img  rounded ">
                    <img src="./assest/images/${brands[i].img}" alt="${brands[i].img}" srcset="" class="rounded w-50">

                    <div class = "layer  w-100 h-100" > 
                
                    <div class = "link d-flex  justify-content-center  align-items-center w-100 h-100  " > 
                    <a href="${brands[i].url}" class=""  target="_blank">
                          <h3>Go To The Site</h3>

                    </a>
                    </div>
                    </div>

                      
                    </figure>
        </div>
    </div>   <!-- end -->
    `
    }
    
    crands_row.innerHTML=container;
    }


    // 
    
