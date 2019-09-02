document.addEventListener('DOMContentLoaded', (event) => {
    let btnName = document.getElementById('btnName')
    btnName && btnName.addEventListener('click', (e) => {
        e.preventDefault();
        console.log(btnName)
        window.location = `/srchname/`
    })



    let form = document.getElementById('form')
    form && form.addEventListener('submit', async (e) => {
        e.preventDefault();
        console.log(e.target.name.value)


        const request1 = await fetch(
            ` https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${e.target.name.value}`
        );

        const r = await request1.json()
        console.log(r);
        // window.location = `/curcocktail/`


        const request2 = await fetch(`/cockinfo`, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                info: r
            })

        })
        //debugger;
        const r2 = await request2.text()
        document.body.innerHTML = r2;



    })



    let btnRandom = document.getElementById('btnRandom')
    btnRandom && btnRandom.addEventListener('click', async (e) => {
        e.preventDefault();

        const requestRnd = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`);
        const rr = await requestRnd.json()
        console.log(rr);

        const request3 = await fetch(`/cockinfo`, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                info: rr
            })
        })
        const r3 = await request3.text()
        document.body.innerHTML = r3;










    })

    let btnbIng = document.getElementById('btnbIng')
    btnbIng && btnbIng.addEventListener('click', (e) => {
        e.preventDefault();
        window.location = `/srching/` // window.location = `/srchname/`
    })


    let form1 = document.getElementById('form1')
    form1 && form1.addEventListener('submit', async (e) => {
        e.preventDefault();
        console.log(e.target.name1.value)


        const requestingr = await fetch(
            `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${e.target.name1.value}`
        );

        const rrr = await requestingr.json()
        console.log(rrr);


        const request4 = await fetch(`/ingcock`, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                info: rrr
            })
        })
        const r4 = await request4.text()
        document.body.innerHTML = r4;


        let buttonch = document.getElementsByClassName('btn btn-primary')
        let title = document.getElementsByClassName('card-title')
        console.log(buttonch)
        for (let i = 0; i < buttonch.length; i++) {
            buttonch[i] && buttonch[i].addEventListener('click', async (e) => {

                e.preventDefault();
                console.log(title[i].innerText);

                const requestttl = await fetch(
                    ` https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${title[i].innerText}`
                );

                const q = await requestttl.json()
                console.log(q)


                const request5 = await fetch(`/cockinfo`, {
                    method: "POST",
                    headers: {
                        "Content-type": "application/json"
                    },
                    body: JSON.stringify({
                        info: q
                    })
                })
                const r5 = await request5.text()
                document.body.innerHTML = r5;






            })
        }
    })





})


// const voit = await fetch(`/posts/${e.target.id}/vote`, {
//     method: 'POST',
//     headers: {
//         "Accept": "application/json",
//         "Content-type": "application/json"
//     },
// })