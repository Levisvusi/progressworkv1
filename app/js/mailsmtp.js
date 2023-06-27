let btn = document.getElementById('submit');
if (btn) {
    btn.addEventListener('click', function (e) {
        e.preventDefault()

        let props = {
            name: donorName,
            email: donorEmail
        };
        //alert('This happened');

        const serviceID = 'service_p63x09m';
        const templateID = 'template_e2mcy2s';

        //alert('Hi its me');

        emailjs.send(serviceID, templateID, props)
            .then(
                res => {
                    //document.forms["myForm"]["don_name"].value = '';
                    //document.forms["myForm"]["don_email"].value = '';
                    //donorName = '';
                    //donorEmail = '';
                    document.getElementById('name').value = '';
                    document.getElementById('email').value = '';
                    console.log(res);
                    alert('Your message was send successful');
                    //location.reload();

                }).catch(err => console.log(err));

        //alert("Good byebye");

    });
}

 

/*
function validateForm() {
    let donorName = document.forms["myForm"]["don_name"].value;
    let donorEmail = document.forms["myForm"]["don_email"].value;
    let btn = document.getElementById('btn');

    if ((donorName == "" || donorName == null) ||
        (donorEmail == "" || donorEmail == null)) {
        alert("Name must be filled out");
        return false;
    } else {
   */
        // alert('What;s going on');

        
/**
 *  btn.addEventListener('click', function (e) {
                e.preventDefault()

                let props = {
                    name: donorName,
                    email: donorEmail
                };
                //alert('This happened');

                const serviceID = 'service_p63x09m';
                const templateID = 'template_e2mcy2s';

                //alert('Hi its me');

                emailjs.send(serviceID, templateID, props)
                    .then(
                        res => {
                            //document.forms["myForm"]["don_name"].value = '';
                            //document.forms["myForm"]["don_email"].value = '';
                            //donorName = '';
                            //donorEmail = '';
                            document.getElementById('name').value = '';
                            document.getElementById('email').value = '';
                            console.log(res);
                            alert('Your message was send successful');
                            location.reload();

                        }).catch(err => console.log(err));

                //alert("Good byebye");
                
            });
 */
/*

     let btn = document.getElementById('btn');
        btn.addEventListener('click', function(e) {
            e.preventDefault()

            let name = document.getElementById('name').value;
            let email = document.getElementById('email').value;
            Email.send({
                Host: "smtp.elasticemail.com",
                Username: "levisvusi.d@gmail.com",
                Password: "5164B3E19827ECE2E122B5FA78CFA5639A76",
                From: "levisvusi.d@gmail.com",
                To: email,
                Subject: "This is the a demo",
                Body: name,
                Port: 2525

            }).then(
                message => alert(message)
            );
        })
 */