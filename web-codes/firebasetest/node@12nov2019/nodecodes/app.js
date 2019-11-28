//// server js named as app.js or index.js
function myfun()
{
    for(var i=1;i<=50;i++ )
    {
        if(i%2==0)
        {
            for(var n=2;n<=9;n++)
            {   
                if(i%n==0)
                {
                    console.log(`${i} is multile of ${n} and even`);
                }
                
            }
        }
        else
        {
            for(var n=2;n<=9;n++)
            {
                if(i%n==0)
                {
                    console.log(`${i} is multile of ${n} and odd`);
                   
                }
                
            }
            
            
            
        }
    }
    
}
myfun();