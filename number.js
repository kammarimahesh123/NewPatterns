const n=5;
let sum=''
for(let i=1; i<=n; i++ )
{
    for(j=1;j<=i;j++)
    {
        sum=sum+j;
        
    }
    sum=sum+"\n"
}
console.log(sum)