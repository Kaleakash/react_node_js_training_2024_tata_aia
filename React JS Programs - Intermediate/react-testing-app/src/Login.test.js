import {fireEvent,render,screen} from '@testing-library/react';
import Login from './Login';

describe("Login Testing suite",()=> {
    it("success testing",async ()=> {
        render(<Login/>)
        let emailid = await screen.findByTestId("emailid");

        //fireEvent.change(emailid,{})
        fireEvent.change(emailid,{target:{value:"admin@gmail.com"}});

        let password = await screen.findByTestId("password");

        fireEvent.change(password,{target:{value:"admin@123"}});

        let submitButton  = await screen.findByTestId("submit");
        fireEvent.submit(submitButton);

        let result   =  await screen.findByTestId("result")
        //console.log(result.textContent)
        expect(result.textContent).toEqual("success");

    })

    it("failure testing",async ()=> {
        render(<Login/>)
        let emailid = await screen.findByTestId("emailid");

        //fireEvent.change(emailid,{})
        fireEvent.change(emailid,{target:{value:"admin@gmail.com"}});

        let password = await screen.findByTestId("password");

        fireEvent.change(password,{target:{value:"admin@1236"}});

        let submitButton  = await screen.findByTestId("submit");
        fireEvent.submit(submitButton);

        let result   =  await screen.findByTestId("result")
        //console.log(result.textContent)
        expect(result.textContent).toEqual("failure");

    })
})