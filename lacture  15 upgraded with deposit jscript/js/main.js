var totalbalance =100000000;

initilize();

function initilize()
{
    var title=document.getElementById("title");
    title.innerText="Bilal Ahmad";
    var balance =document.getElementById("balance");
    balance.innerText="Total Balance";
    var currency=document.getElementById("currency");
    currency.innerText="PKRS";
    var IBAN=document.getElementById("IBAN");
    IBAN.innerText="PKN123456";
 }

 Deposite_amount();

function Deposite_amount(e) {
    if(e.keyCode== 13)
    {
        var bal= document.getElementById("deposit").value;
        bal=parseInt(bal);
        if(isNaN(bal))
        {
            document.getElementById("deposit-mag").innerText="No amount entered";
        }
        else
        {
            document.getElementById("deposit-mag").innerText=" ";
            totalbalance=totalbalance+bal;
            document.getElementById("balance").innerText=totalbalance;
            let table =document.getElementById("transaction-table");
            table.innerHTML +=
                '<tr>'
            +'<th align="left" valign="middle" scope="col">' + 'new Data()' +'<th>'
                +'<th align="left" valign="middle" scope="col">' +'Credit' + '<th>'
                +'<th align="left" valign="middle" scope="col">' + document.getElementById("deposit").value +'<th>'
            +'</tr>';
        }
    }
}

