import React, {useState,useContext} from 'react';
import QR from "./QR.jpg";
import logomzk from "./logomzk.png";
import {
    DateContext,
    TicketNumContext,
    TicketTypeContext,
    TimeContext,
    ValueContext,
    VehNrContext,
    VehTypeContext
} from "./context";
import moment from "moment";
import {Link} from "react-router-dom";


export const Result = props => {

    const { vehNr } = props.location.state;
    const [value, setValue] = useContext(ValueContext);
    const [vehType, setVehType] = useContext(VehTypeContext);
    // const [vehNr, setVehNr] = useContext(VehNrContext);
    const [ticketNum, setTicketNum] = useContext(TicketNumContext);
    const [date, setDate] = useContext(DateContext);
    const [time, setTime] = useContext(TimeContext);
    const [ticketType, setTicketType] = useContext(TicketTypeContext)

    var price = 0;
    var desc = '-';

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

    const inDate = moment(date + ' ' + time).subtract(14,"seconds").format('DD-MM-YYYY HH:mm:ss');
    var expDate = moment(date + ' ' + time).subtract(14, "seconds").format('DD-MM-YYYY HH:mm:ss');

    switch(value) {

        /*NORMALNE*/

        case Ticket1.value:
            price = 4.80;
            expDate = moment(date + ' ' + time).add(1,"hours").format('DD-MM-YYYY HH:mm:ss');
            desc = Ticket1.value + ' ważny do ' + expDate;
            break;
        case Ticket2.value:
            price = 3.80;
            expDate = moment(date + ' ' + time).add(1,"hours").format('DD-MM-YYYY HH:mm:ss');
            desc = Ticket2.value + ' ważny do ' + expDate;
            break;
        case Ticket3.value:
            price = 4.20;
            expDate = moment(date + ' ' + time).add(1,"hours").format('DD-MM-YYYY HH:mm:ss');
            desc = Ticket3.value + ' ważny do ' + expDate;
            break;
        case Ticket4.value:
            price = 20;
            expDate = moment(date + ' ' + time).add(24,"hours").format('DD-MM-YYYY HH:mm:ss');
            desc = Ticket4.value + ' ważny do ' + expDate;
            break;
        case Ticket5.value:
            price = 23;
            expDate = moment(date + ' ' + time).add(24,"hours").format('DD-MM-YYYY HH:mm:ss');
            desc = Ticket5.value + ' ważny do ' + expDate;
            break;
        case Ticket6.value:
            price = 20;
            expDate = moment(date + ' ' + time).add(24,"hours").format('DD-MM-YYYY HH:mm:ss');
            desc = Ticket6.value + ' ważny do ' + expDate;
        case Ticket7.value:
            price = 20;
            expDate = moment(date + ' ' + time).add(24,"hours").format('DD-MM-YYYY HH:mm:ss');
            desc = Ticket7.value + ' ważny do ' + expDate;
            break;
        case Ticket8.value:
            price = 20;
            expDate = moment(date + ' ' + time).add(24,"hours").format('DD-MM-YYYY HH:mm:ss');
            desc = Ticket8.value + ' ważny do ' + expDate;
            break;
        case Ticket9.value:
            price = 15;
            expDate = moment(date + ' ' + time).add(72,"hours").format('DD-MM-YYYY HH:mm:ss');
            desc = Ticket9.value + ' ważny do ' + expDate;
            break;
        case Ticket10.value:
            price = 46;
            expDate = moment(date + ' ' + time).add(72,"hours").format('DD-MM-YYYY HH:mm:ss');
            desc = Ticket10.value + ' ważny do ' + expDate;
            break;
        case Ticket11.value:
            price = 3;
            expDate = "do końca kursu";
            desc = 'Jednoprzejazdowy ważny na linie zwykłe ' + expDate;
            break;
        case Ticket12.value:
            price = 4;
            expDate = "do końca kursu";
            desc = 'Jednoprzejazdowy ważny na linie pospieszne/nocne ' + expDate;
            break;

        /*ULGOWE*/

        case rTicket1.value:
            price = 2.40;
            expDate = moment(date + ' ' + time).add(1,"hours").format('DD-MM-YYYY HH:mm:ss');
            desc = rTicket1.value + ' ważny do ' + expDate;
            break;
        case rTicket2.value:
            price = 2.40;
            expDate = moment(date + ' ' + time).add(1,"hours").format('DD-MM-YYYY HH:mm:ss');
            desc = rTicket2.value + ' ważny do ' + expDate;
            break;
        case rTicket3.value:
            price = 2.10;
            expDate = moment(date + ' ' + time).add(1,"hours").format('DD-MM-YYYY HH:mm:ss');
            desc = rTicket3.value + ' ważny do ' + expDate;
            break;
        case rTicket4.value:
            price = 10;
            expDate = moment(date + ' ' + time).add(24,"hours").format('DD-MM-YYYY HH:mm:ss');
            desc = rTicket4.value + ' ważny do ' + expDate;
            break;
        case rTicket5.value:
            price = 11.50;
            expDate = moment(date + ' ' + time).add(24,"hours").format('DD-MM-YYYY HH:mm:ss');
            desc = rTicket5.value + ' ważny do ' + expDate;
            break;
        case rTicket6.value:
            price = 10;
            expDate = moment(date + ' ' + time).add(24,"hours").format('DD-MM-YYYY HH:mm:ss');
            desc = rTicket6.value + ' ważny do ' + expDate;
            break;
        case rTicket7.value:
            price = 10;
            expDate = moment(date + ' ' + time).add(24,"hours").format('DD-MM-YYYY HH:mm:ss');
            desc = rTicket7.value + ' ważny do ' + expDate;
            break;
        case rTicket8.value:
            price = 10;
            expDate = moment(date + ' ' + time).add(24,"hours").format('DD-MM-YYYY HH:mm:ss');
            desc = rTicket8.value + ' ważny do ' + expDate;
            break;
        case rTicket9.value:
            price = 7.5;
            expDate = moment(date + ' ' + time).add(72,"hours").format('DD-MM-YYYY HH:mm:ss');
            desc = rTicket9.value + ' ważny do ' + expDate;
            break;
        case rTicket10.value:
            price = 23;
            expDate = moment(date + ' ' + time).add(72,"hours").format('DD-MM-YYYY HH:mm:ss');
            desc = rTicket10.value + ' ważny do ' + expDate;
            break;
        case rTicket11.value:
            price = 1.50;
            expDate = "do końca kursu";
            desc = 'Jednoprzejazdowy ważny na linie zwykłe ' + expDate;
            break;
        case rTicket12.value:
            price = 2;
            expDate = "do końca kursu";
            desc = 'Jednoprzejazdowy ważny na linie pospieszne/nocne ' + expDate;
            break;
    }

    return(

        <div id="outBox">

            <div id="fotokod">Fotokod:</div>

            <div id="QueR">
                <img id="kodQR" src={QR} alt="QR"/>
            </div>

            <div id="logomzk">
                <img id="logoMZK" src={logomzk} alt="Logo MZK" height="100" width="100"/>
            </div>

            <div id="ans">{value}</div>

            <p> Opis biletu:</p>
            <div id="ans">{desc}</div><br/>

            <p>Ważny od: </p>
            <div id="ans">{inDate}</div>

            <p>Ważny do:</p>
            <div id="ans">{expDate}</div>

            <p> Wystawca biletu: </p>
            <div id="ans">MZKZG</div>

            <p> Numer Linii:</p>
            <div id="ans"> {vehNr}{vehType} </div>

            <p> Liczba sztuk: </p>
            <div id="ans"> {ticketNum} </div>

            <p> Cena za 1 bilet:  </p>
            <div id="ans"> {price.toLocaleString('pl-PL',{minimumFractionDigits:2}) + ' PLN'} </div>

            <p> Numer kontrolny: </p>
            <div id="ans">026775</div>

            <p> Numer biletu: </p>
            <div id="ans">190625618092</div>

            <p> Bilet zakupiony: </p>
            <div id="ans"> {inDate}</div>

            <p> Kwota transakcji: </p>
            <div id="ans">{(ticketNum * price).toLocaleString('pl-PL',{minimumFractionDigits:2})} PLN</div>

            <p> Numer transakcji: </p>
            <div id="ans">1000110000235883327</div><br/>

            <Link to="/">
                <button id="backButton"><div id="backButtonText">&lsaquo;</div></button>
            </Link>

        </div>

        )
}