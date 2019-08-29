import React, {useState, useContext} from 'react';
import moment from "moment";
import {
    DateContext,
    TicketNumContext,
    TicketTypeContext,
    TimeContext,
    ValueContext,
    VehNrContext,
    VehTypeContext
} from "./context";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

export const TicketForm = props => {

    const [value, setValue] = useContext(ValueContext);
    const [vehType, setVehType] = useContext(VehTypeContext);
    const [vehNr, setVehNr] = useState(0);
    const [ticketNum, setTicketNum] = useContext(TicketNumContext);
    const [date, setDate] = useContext(DateContext);
    const [time, setTime] = useContext(TimeContext);
    const [ticketType, setTicketType] = useContext(TicketTypeContext);

    const onChangeValue = event => setValue(event.target.value);
    const onChangeVehType = event => setVehType(event.target.value);
    const onChangeVehNr = event => setVehNr(event.target.value);
    const onChangeTicketNum = event => setTicketNum(event.target.value);
    const onChangeDate = event => setDate(event.target.value);
    const onChangeTime = event => setTime(event.target.value);
    const onChangeTicketType = event =>  setTicketType(event.target.value);
    const buyNow = () => {
        setDate(moment().format('YYYY-MM-DD'));
        setTime(moment().format('HH:mm:ss'));
    }

    const Ticket1 = {value: "1 godzinny metropolitalny na linie nocne/pośpieszne/zwykłe"};
    const Ticket2 = {value: "1 godzinny metropolitalny na linie zwykłe"};
    const Ticket3 = {value: "1 godzinny metropolitalny ZKM Gdynia nocne/pospieszne/zwykle"};
    const Ticket4 = {value: "Bilet 24 godzinny MZKWej+KOLEJ"};
    const Ticket5 = {value: "Bilet 24 godzinny MZKZG"};
    const Ticket6 = {value: "Bilet 24 godzinny ZKMGdy+KOLEJ"};
    const Ticket7 = {value: "Bilet 24 godzinny ZTMGda+KOLEJ"};
    const Ticket8 = {value: "Bilet 24 godzinny ZTMGda+ZKMGdy+MZKWej"};
    const Ticket9 = {value: "Bilet 72 godzinny ZTMGda+ZKMGdy+MZKWej"};
    const Ticket10 = {value: "Bilet 72 godzinny MZKZG"};
    const Ticket11 = {value: "Jednoprzejazdowy na linie zwykłe"};
    const Ticket12 = {value: "Jednoprzejazdowy na linie pospieszne/nocne"};

    const rTicket1 = {value: "1 godzinny metropolitalny na linie nocne/pośpieszne/zwykłe "};
    const rTicket2 = {value: "1 godzinny metropolitalny na linie zwykłe "};
    const rTicket3 = {value: "1 godzinny metropolitalny ZKM Gdynia nocne/pospieszne/zwykle "};
    const rTicket4 = {value: "Bilet 24 godzinny MZKWej+KOLEJ "};
    const rTicket5 = {value: "Bilet 24 godzinny MZKZG "};
    const rTicket6 = {value: "Bilet 24 godzinny ZKMGdy+KOLEJ "};
    const rTicket7 = {value: "Bilet 24 godzinny ZTMGda+KOLEJ "};
    const rTicket8 = {value: "Bilet 24 godzinny ZTMGda+ZKMGdy+MZKWej "};
    const rTicket9 = {value: "Bilet 72 godzinny ZTMGda+ZKMGdy+MZKWej "};
    const rTicket10 = {value: "Bilet 72 godzinny MZKZG "};
    const rTicket11 = {value: "Jednoprzejazdowy na linie zwykłe "};
    const rTicket12 = {value: "Jednoprzejazdowy na linie pospieszne/nocne "};

    var selector = '';

    if(ticketType === "normalny"){
        selector =
            <select id="select" value={value} onChange={onChangeValue}>
                <option value = "-" disabled>Wybierz bilet (normalny)</option>
                <option value = {Ticket1.value}>1 godzinny metropolitalny na linie nocne/pośpieszne/zwykłe</option>
                <option value = {Ticket2.value}>1 godzinny metropolitalny na linie zwykłe</option>
                <option value = {Ticket3.value}>1 godzinny metropolitalny ZKM Gdynia nocne/pospieszne/zwykle</option>
                <option value = {Ticket4.value}>Bilet 24 godzinny MZKWej+KOLEJ</option>
                <option value = {Ticket5.value}>Bilet 24 godzinny MZKZG</option>
                <option value = {Ticket6.value}>Bilet 24 godzinny ZKMGdy+KOLEJ</option>
                <option value = {Ticket7.value}>Bilet 24 godzinny ZTMGda+KOLEJ</option>
                <option value = {Ticket8.value}>Bilet 24 godzinny ZTMGda+ZKMGdy+MZKWej</option>
                <option value = {Ticket9.value}>Bilet 72 godzinny MZKZG</option>
                <option value = {Ticket10.value}>Bilet 72 godzinny ZTMGda+ZKMGdy+MZKWej</option>
                <option value = {Ticket11.value}>Jednoprzejazdowy na linie zwykłe</option>
                <option value = {Ticket12.value}>Jednoprzejazdowy na linie pospieszne/nocne</option>
            </select>;
    }

    else if(ticketType === "ulgowy"){
        selector =
            <select id="select" value={value} onChange={onChangeValue}>
                <option value = "-" disabled>Wybierz bilet (ulgowy)</option>
                <option value = {rTicket1.value}>1  godzinny metropolitalny na linie nocne/pośpieszne/zwykłe</option>
                <option value = {rTicket2.value}>1 godzinny metropolitalny na linie zwykłe</option>
                <option value = {rTicket3.value}>1 godzinny metropolitalny ZKM Gdynia nocne/pospieszne/zwykle</option>
                <option value = {rTicket4.value}>Bilet 24 godzinny MZKWej+KOLEJ</option>
                <option value = {rTicket5.value}>Bilet 24 godzinny MZKZG</option>
                <option value = {rTicket6.value}>Bilet 24 godzinny ZKMGdy+KOLEJ</option>
                <option value = {rTicket7.value}>Bilet 24 godzinny ZTMGda+KOLEJ</option>
                <option value = {rTicket8.value}>Bilet 24 godzinny ZTMGda+ZKMGdy+MZKWej</option>
                <option value = {rTicket9.value}>Bilet 72 godzinny MZKZG</option>
                <option value = {rTicket10.value}>Bilet 72 godzinny ZTMGda+ZKMGdy+MZKWej</option>
                <option value = {rTicket11.value}>Jednoprzejazdowy na linie zwykłe</option>
                <option value = {rTicket12.value}>Jednoprzejazdowy na linie pospieszne/nocne</option>
            </select>;
    }


    return (

        <form>

            <div id="inBox">

                <div id="in">Wybierz typ biletu:
                    <select id="select" value={ticketType} onChange={onChangeTicketType}>
                        <option value={"normalny"}>Normalny</option>
                        <option value={"ulgowy"}>Ulgowy</option>
                    </select>
                </div>


                <div id="in">
                    Wybierz bilet:<br/>
                        {selector}
                </div>


                <div id="in">
                    Ile biletów chcesz kupić?<br/>
                        <input type="number" value={ticketNum} onChange={onChangeTicketNum}/>
                </div>

                <div id="in">
                    Wprowadź numer linii:<br/>
                        <input type="text" onChange={onChangeVehNr} placeholder="Numer linii"/>
                        <label><input type="radio" name="vehType" value=" (tramwaj)" onChange={onChangeVehType}/>Tramwaj</label>
                        <label><input type="radio" name="vehType" value=" (autobus)" onChange={onChangeVehType}/>Autobus</label>
                </div>

                <div id="in">
                    Wprowadź datę i godzinę:<br/>
                        <input type="date" value={date} onChange={onChangeDate}/>
                        <input type="time" value={time} onChange={onChangeTime} step="2"/>
                </div>

            </div>

            <Link to="/result">
                <button id="button">Kup Bilet</button>
            </Link>

            <Link to={{pathname: "/result", state: { vehNr }}}>
                <button id="button" onClick={buyNow}>Kup Teraz</button>
            </Link>


        </form>

        );
    }