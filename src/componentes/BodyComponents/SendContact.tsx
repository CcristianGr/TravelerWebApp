import { useState } from 'react';
import { getPostActiveCloseArea, postComentario } from "../../API/Endpoint"
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';

export const SendContact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    function onSubmit() {
        if (!name || !email || !subject || !message) {
            const container = document.getElementById("FormContainerContact");
            if (container) {
                const fields = container.querySelectorAll("input, textarea");
                fields.forEach((field) => {
                    const id = (field as HTMLInputElement | HTMLTextAreaElement).id;
                    const value = (field as HTMLInputElement | HTMLTextAreaElement).value;
                    console.log(`ID: ${id}, Valor: ${value}`);
                    document.querySelector(id)?.closest("div")?.append("sssss")
                });
            }
            return;
        }
        postComentario({
            postId: 100,
            id: 501,
            name: name,
            email: email,
            body: message
        })
            .then(res => {
                alert("Correo Enviado")
                console.log(res)
                navigate("/")
            }
            )
            .catch(err => console.error('Error POST:', err));
    }

    return (
        <>
            <div className="flex justify-center flex-col items-center">
                <p className='text-xl text-primary'>CONTACT</p>
                <p className='text-2xl'>Contact For Any Query</p>
                <div className="bg-white flex flex-col w-2xl p-6" id='FormContainerContact'>
                    <div className="mb-5 *:w-1/2 **:w-full *:*:border-1 flex *:*:p-2 **:border-gray-400">
                        <div className="pr-3">
                            <input type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} id='inputName' />
                        </div>
                        <div>
                            <input type="text" placeholder="Your Email" value={email} onChange={(e) => setEmail(e.target.value)} id='inputEmail' />
                        </div>
                    </div>
                    <input type="text" placeholder="Subject" className="h-10 border-1 mb-5 border-gray-400 p-2" value={subject} onChange={(e) => setSubject(e.target.value)} id='inputSubject' />
                    <textarea placeholder="Message" className="h-40 border-1 border-gray-400 p-2 text-wrap mb-5" value={message} onChange={(e) => setMessage(e.target.value)} id='inputMessage' />
                    <div className="self-center">
                        <button
                            className="bg-primary text-white font-[600] hover:bg-hover-p cursor-pointer h-12 w-40"
                            onClick={onSubmit}
                        >
                            Send Message
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}