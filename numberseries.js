const n=4;

let sum="";

let k=1;

for(i=1;i<=n;i++)
{
    for(j=1;j<=i;j++)
    {
        sum=sum+k;
        k++;
    }
    sum=sum+"\n"
}
console.log(sum)