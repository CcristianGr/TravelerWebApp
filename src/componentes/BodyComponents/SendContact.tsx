import { useState } from 'react';
import { postComentario } from "../../api/Endpoint"
import { useNavigate } from 'react-router-dom';

export const SendContact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [errors, setErrors] = useState<string[]>([]);
    const navigate = useNavigate();

    function onSubmit() {
        const emptyFields: string[] = [];
        if (!name) emptyFields.push('inputName');
        if (!email) emptyFields.push('inputEmail');
        if (!subject) emptyFields.push('inputSubject');
        if (!message) emptyFields.push('inputMessage');

        if (emptyFields.length > 0) {
            setErrors(emptyFields);
            return;
        }
        setErrors([]);
        postComentario({
            postId: 100,
            id: 501,
            name: name,
            email: email,
            body: message
        })
            .then(res => {
                alert("Correo Enviado")
                navigate("/")
            })
            .catch(err => console.error('Error POST:', err));
    }

    return (
        <div className="flex justify-center flex-col items-center">
            <p className='text-xl text-primary'>CONTACT</p>
            <p className='text-2xl'>Contact For Any Query</p>
            <div className="bg-white flex flex-col w-2xl p-6" id='FormContainerContact'>
                <div className="mb-5 *:w-1/2 **:w-full *:*:border-1 flex *:*:p-2 **:border-gray-400">
                    <div className="pr-3">
                        <input
                            type="text"
                            placeholder="Your Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            id='inputName'
                            className={errors.includes('inputName') ? 'border-red-500' : ''}
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            placeholder="Your Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            id='inputEmail'
                            className={errors.includes('inputEmail') ? 'border-red-500' : ''}
                        />
                    </div>
                </div>
                <input
                    type="text"
                    placeholder="Subject"
                    className={`h-10 border-1 mb-5 border-gray-400 p-2 ${errors.includes('inputSubject') ? 'border-red-500' : ''}`}
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    id='inputSubject'
                />
                <textarea
                    placeholder="Message"
                    className={`h-40 border-1 border-gray-400 p-2 text-wrap mb-5 ${errors.includes('inputMessage') ? 'border-red-500' : ''}`}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    id='inputMessage'
                />
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
    )
}