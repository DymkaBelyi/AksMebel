
const Contacts = () => {
    return (
        <main align="center" className="section">
            <div className="container">
                <h2 className="title-1">Контакты</h2>

                <ul className="content-list">
                    <li className="content-list-item">
                        <h5 className="title-2">Локация</h5>
                        <p>Москва, Россия</p>
                    </li>
                    <li className="content-list-item">
                        <h3 className="title-2">Telegram / WhatsApp</h3>
                        <p>
                            <a href="tel:+79067534586">+7 (906) 753-45-86</a>
                        </p>
                    </li>
                    <div className="col-sm">
                        <div className="alert alert-dismissible">
                        <img src={support}
                             className="d-block user-select-none img-head-info" alt="aaa"/>
                        <button className="btn btn-outline-warning">Круглосуточная служба поддержки</button>
                        </div>
                    </div>
                </ul>
            </div>
        </main>
    );
}


export default Contacts;