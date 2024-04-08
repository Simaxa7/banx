## Payment form

Create a payment form using React and typescript by choosing vite.js/next.js or some other tooling/framework.
It is preferable to take UI components from antd/material.
For forms, use formik/react-hook-form and the appropriate validation library.

Form consists of:
* amount (mandatory | number | min 0.01 | max by account balance)
* payeeAccount (mandatory | string | *endpoint)
* purpose (mandatory | string | min 3 | max 135)
* payerAccount (mandatory | string)
   ** display options with balance
* payee (mandatory | string | max 70)
  
*IBAN validation endpoint: GET 
Reposponse: {"iban":"LT307300010172619164","valid":true}


```javascript
const payerAccounts = [
    {
        iban: 'LT307300010172619160',
        id: '1',
        balance: 1000.12
    },
    {
        iban: 'LT307300010172619161',
        id: '2',
        balance: 2.43
    },
    {
        iban: 'LT307300010172619162',
        id: '3',
        balance: -5.87
    }
];  
```
