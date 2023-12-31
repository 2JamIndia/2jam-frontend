import React from "react";
import {Helmet} from "react-helmet";

import {PolicyBlock} from "../components/";

const Policy: React.FC = () => {
    const documentContent = [
        {
            title: "",
            content: [
                {
                    type: "text",
                    text: "Все лица, заполнившие сведения, являющиеся персональными данными на сайтах hobjob.ru и masters.hobjob.ru, а также разместившие иную информацию на сайтах hobjob.ru и masters.hobjob.ru, подтверждают свое согласие на обработку персональных данных и их передачу оператору обработки персональных данных – ИП Нагибин Н. С. ",
                },
                {
                    type: "text",
                    text: "Пользователь дает свое согласие на обработку его персональных данных, а именно совершение действий, предусмотренных пунктом 3 части 1 статьи 3 Федерального закона от 27.07.2006 № 152-ФЗ «О персональных данных», и подтверждает, что, давая такое согласие, он действует свободно, своей волей и в своем интересе.",
                },
            ],
        },
        {
            title: "1. НАЗНАЧЕНИЕ И ОБЛАСТЬ ДЕЙСТВИЯ ДОКУМЕНТА",
            content: [
                {
                    type: "text",
                    text: "1.1. Политика ИП Нагибина Н.С. (далее по тексту также – Индивидуальный предприниматель) в отношении обработки персональных данных» (далее – Политика) определяет позицию и намерения Индивидуального предпринимателя в области обработки и защиты персональных данных, с целью соблюдения и защиты прав и свобод каждого человека и, в особенности, права на неприкосновенность частной жизни, личную и семейную тайну, защиту своей чести и доброго имени.",
                },
                {
                    type: "text",
                    text: "1.2. Политика неукоснительно исполняется руководителями, а также сотрудниками ИП Нагибин Н.С.",
                },
                {
                    type: "text",
                    text: "1.3. Действие Политики распространяется на все персональные данные субъектов, получаемые и обрабатываемые с применением средств автоматизации, а также без применения таковых.",
                },
                {
                    type: "text",
                    text: "1.4. К настоящей Политике имеет доступ любой субъект персональных данных.",
                },
            ],
        },
        {
            title: "2. ОПРЕДЕЛЕНИЯ",
            content: [
                {
                    type: "text",
                    text: "2.1. Персональные данные - любая информация, относящаяся к прямо или косвенно определенному или определяемому физическому лицу (гражданину). Т.е. к такой информации, в частности, можно отнести: ФИО, год, месяц, дата и место рождения, адрес, сведения о семейном, социальном, имущественном положении, сведения об образовании, профессии, доходах, сведения о состоянии здоровья, адрес электронной почты, номер телефона, а также другую информацию.",
                },
                {
                    type: "text",
                    text: "2.2. Обработка персональных данных - любое действие (операция) или совокупность действий (операций) с персональными данным, совершаемых с использованием средств автоматизации или без использования таких средств. К таким действиям (операциям) можно отнести: сбор, получение, запись, систематизацию, накопление, хранение, уточнение (обновление, изменение), извлечение, использование, передачу (распространение, предоставление, доступ), обезличивание, блокирование, удаление, уничтожение персональных данных.",
                },
            ],
        },
        {
            title: "3. СУБЪЕКТЫ ПЕРСОНАЛЬНЫХ ДАННЫХ ИП Нагибин Н.С. ОБРАБАТЫВАЕТ ПЕРСОНАЛЬНЫЕ ДАННЫЕ СЛЕДУЮЩИХ ЛИЦ:",
            content: [
                {
                    type: "list",
                    items: [
                        "· сотрудников ИП Нагибин Н.С.",
                        "· субъектов, с которыми заключены договоры гражданско-правового характера;",
                        "· кандидатов на замещение вакантных должностей ИП Нагибин Н.С.;",
                        "· клиентов ИП Нагибин Н.С.;",
                        "· зарегистрированных пользователей сайта ИП Нагибин Н.С.;",
                        "· представителей юридических лиц;",
                        "· поставщиков (индивидуальных предпринимателей).",
                    ],
                },
            ],
        },
        {
            title: "4. ПРИНЦИПЫ И УСЛОВИЯ ОБРАБОТКИ ПЕРСОНАЛЬНЫХ ДАННЫХ",
            content: [
                {
                    type: "text",
                    text: "4.1. Под безопасностью персональных данных ИП Нагибин Н.С. понимает защищенность персональных данных от неправомерного или случайного доступа к ним, уничтожения, изменения, блокирования, копирования, предоставления, распространения персональных данных, а также от иных неправомерных действий в отношении персональных данных и принимает все необходимые меры для защиты персональных данных.",
                },
                {
                    type: "text",
                    text: "4.2. Обработка и обеспечение безопасности персональных данных в ИП Нагибин Н.С. осуществляется в соответствии с требованиями Конституции Российской Федерации, Федерального закона № 152-ФЗ «О персональных данных», подзаконных актов, других определяющих случаи и особенности обработки персональных данных федеральных законов Российской Федерации, руководящих и методических документов ФСТЭК России и ФСБ России.",
                },
                {
                    type: "text",
                    text: "4.3. Индивидуальный предприниматель обрабатывает персональные данные только при наличии хотя бы одного из следующих условий:",
                },
                {
                    type: "list",
                    items: [
                        "· обработка персональных данных осуществляется с согласия субъекта персональных данных на обработку его персональных данных;",
                        "· обработка персональных данных необходима для достижения целей, предусмотренных законом, для осуществления и выполнения возложенных законодательством Российской Федерации на оператора функций, полномочий и обязанностей;",
                        "· обработка персональных данных необходима для исполнения договора, стороной которого либо выгодоприобретателем или поручителем по которому является субъект персональных данных, а также для заключения договора по инициативе субъекта персональных данных или договора, по которому субъект персональных данных будет являться выгодоприобретателем или поручителем;",
                        "· обработка персональных данных необходима для осуществления прав и законных интересов Индивидуального предпринимателя или третьих лиц либо для достижения общественно значимых целей при условии, что при этом не нарушаются права и свободы субъекта персональных данных;",
                        "· осуществляется обработка персональных данных, доступ неограниченного круга лиц к которым предоставлен субъектом персональных данных либо по его просьбе;",
                        "· осуществляется обработка персональных данных, подлежащих опубликованию или обязательному раскрытию в соответствии с федеральным законом.",
                    ],
                },
                {
                    type: "text",
                    text: "4.4. В случаях, установленных законодательством Российской Федерации, ИП Нагибин Н.С. вправе осуществлять передачу персональных данных граждан.",
                },
                {
                    type: "text",
                    text: "4.5. В целях информационного обеспечения Индивидуальным предпринимателем могут создаваться общедоступные источники персональных данных работников, в том числе справочники и адресные книги. В общедоступные источники персональных данных с согласия работника могут включаться его фамилия, имя, отчество, дата и место рождения, должность, номера контактных телефонов, адрес электронной почты. Сведения о работнике должны быть в любое время исключены из общедоступных источников персональных данных по требованию работника либо по решению суда или иных уполномоченных государственных органов.",
                },
                {
                    type: "text",
                    text: "4.6. Индивидуальный предприниматель уничтожает либо обезличивает персональные данные по достижении целей обработки или в случае утраты необходимости достижения цели обработки.",
                },
            ],
        },
        {
            title: "5. ПРЕДОСТАВЛЕНИЕ ИНФОРМАЦИИ СУБЪЕКТОМ ПЕРСОНАЛЬНЫХ ДАННЫХ",
            content: [
                {
                    type: "text",
                    text: "5.1. При оформлении заявки на сайтах hobjob.ru и masters.hobjob.ru (далее — «Сайт») субъект персональных данных предоставляет следующую информацию:",
                },
                {
                    type: "list",
                    item: [
                        "- Ф.И.О",
                        "- адрес электронной почты;",
                        "- номер контактного телефона;",
                        "- иные данные.",
                    ],
                },
                {
                    type: "text",
                    text: '5.2. Предоставляя свои персональные данные субъект персональных данных соглашается на их обработку (вплоть до отзыва субъектом персональных данных своего согласия на обработку его персональных данных) ИП Нагибин Н.С., в целях исполнения Индивидуальным предпринимателем и/или его партнерами своих обязательств перед субъектом персональных данных, предоставления услуг, предоставления справочной информации, а также в целях продвижения товаров, работ и услуг, а также соглашается на получение сообщений рекламно-информационного характера и сервисных сообщений. При обработке персональных данных субъекта персональных данных Индивидуальный предприниматель руководствуется Федеральным законом "О персональных данных", Федеральным законом "О рекламе" и локальными нормативными документами.',
                },
                {
                    type: "text",
                    text: "5.3. Если субъект персональных данных желает уточнения его персональных данных, их блокирования или уничтожения в случае, если персональные данные являются неполными, устаревшими, неточными, незаконно полученными или не являются необходимыми для заявленной цели обработки, либо в случае желания субъекта отозвать свое согласие на обработку персональных данных, он должен направить соответствующий запрос на адрес электронной почты support@hobjob.ru. Если субъект желает удалить свою учетную запись с Сайта, ему необходимо отправить запрос на адрес электронной почты support@hobjob.ru с соответствующей просьбой. Данное действие не подразумевает отзыв согласия субъекта на обработку его персональных данных, который согласно действующему законодательству происходит в порядке, предусмотренном абзацем 1 настоящего пункта.",
                },
            ],
        },
        {
            title: "6. ИСПОЛЬЗОВАНИЕ ИНФОРМАЦИИ, ПРЕДОСТАВЛЕННОЙ СУБЪЕКТОМ И ПОЛУЧАЕМОЙ ОБЩЕСТВОМ",
            content: [
                {
                    type: "text",
                    text: "6.1. Индивидуальный предприниматель использует предоставленные субъектом данные в течение всего срока сотрудничества с субъектом в целях:",
                },
                {
                    type: "list",
                    item: [
                        "· регистрации/авторизации субъекта на Сайте;",
                        "· обработки заявок субъекта и для выполнения своих обязательств перед субъектом;",
                        "· для осуществления деятельности по продвижению товаров и услуг;",
                        "· оценки и анализа работы Сайта;",
                        "· определения победителя в акциях, проводимых Индивидуальным предпринимателем;",
                        "· анализа покупательских особенностей субъекта и предоставления персональных рекомендаций;",
                        "· участия Клиента в программе лояльности ИП Нагибин Н.С.;",
                        "· информирования субъекта об акциях, скидках и специальных предложениях посредством электронных рассылок.",
                    ],
                },
            ],
        },
        {
            title: "7. ПРАВА СУБЪЕКТА ПЕРСОНАЛЬНЫХ ДАННЫХ",
            content: [
                {
                    type: "text",
                    text: "Гражданин, персональные данные которого обрабатываются ИП Нагибин Н.С., имеет право:",
                },
                {
                    type: "list",
                    items: [
                        "· получать от ИП Нагибин Н.С.:",
                        "o подтверждение факта обработки персональных данных;",
                        "o правовые основания и цели обработки персональных данных;",
                        "o сведения о применяемых способах обработки персональных данных;",
                        "o наименование и местонахождения;",
                        "o сведения о лицах, которые имеют доступ к персональным данным или которым могут быть раскрыты персональные данные на основании договора или на основании федерального закона;",
                        "o перечень обрабатываемых персональных данных, относящихся к гражданину, от которого поступил запрос и источник их получения, если иной порядок предоставления таких данных не предусмотрен федеральным законом;",
                        "o сведения о сроках обработки персональных данных, в том числе о сроках их хранения;",
                        "o сведения о порядке осуществления гражданином прав, предусмотренных Федеральным законом «О персональных данных» № 152-ФЗ;",
                        "o иные сведения, предусмотренные Федеральным законом «О персональных данных» № 152-ФЗ или другими федеральными законами;",
                        "· требовать уточнения своих персональных данных, их блокирования или уничтожения в случае, если персональные данные являются неполными, устаревшими, неточными;",
                        "· отозвать свое согласие на обработку персональных данных;",
                        "· обжаловать действия или бездействие ИП Нагибин Н.С. в Федеральную службу по надзору в сфере связи, информационных технологий и массовых коммуникаций (Роскомнадзор) или в судебном порядке в случае, если гражданин считает, что Индивидуальный предприниматель осуществляет обработку его персональных данных с нарушением требований Федерального закона № 152-ФЗ «О персональных данных» или иным образом нарушает его права и свободы;",
                        "· на защиту своих прав и законных интересов, в том числе на возмещение убытков и/или компенсацию морального вреда в судебном порядке.",
                    ],
                },
            ],
        },
        {
            title: "8. ОТВЕТСТВЕННОСТЬ",
            content: [
                {
                    type: "text",
                    text: "В случае неисполнения положений настоящей Политики ИП Нагибин Н.С. несет ответственность в соответствии действующим законодательством Российской Федерации. Получить разъяснения по интересующим Вас вопросам обработки Ваших персональных данных, обратившись лично в ИП Нагибин Н.С. либо направив официальный запрос по Почте России по адресу: 347381, г. Волгодонск, Морская ул., 122 кв. 38. В случае направления официального запроса в ИП Нагибин Н.С. в тексте запроса необходимо указать:",
                },
                {
                    type: "list",
                    items: [
                        "· ФИО;",
                        "· номер основного документа, удостоверяющего личность субъекта персональных данных или его представителя, сведения о дате выдачи указанного документа и выдавшем его органе;",
                        "· сведения, подтверждающие Ваше участие в отношениях с ИП Нагибин Н.С. либо сведения, иным способом подтверждающие факт обработки персональных данных ИП Нагибин Н.С.;",
                        "· подпись гражданина (или его законного представителя). Если запрос отправляется в электронном виде, то он должен быть оформлен в виде электронного документа и подписан электронной подписью в соответствии с законодательством РФ. На сайтах hobjob.ru и masters.hobjob.ru публикуется актуальная версия «Политики ИП Нагибин Н.С. в отношении обработки персональных данных».",
                    ],
                },
            ],
        },
        {
            title: "СВЕДЕНИЯ О РЕАЛИЗУЕМЫХ ТРЕБОВАНИЯХ К ЗАЩИТЕ ПЕРСОНАЛЬНЫХ ДАННЫХ",
            content: [
                {
                    type: "text",
                    text: "ИП Нагибин Н.С. при обработке персональных данных принимает необходимые правовые, организационные и технические меры для защиты персональных данных от неправомерного или случайного доступа к ним, уничтожения, изменения, блокирования, копирования, предоставления, распространения персональных данных, а также от иных неправомерных действий в отношении персональных данных.",
                },
                {
                    type: "text",
                    text: "К таким мерам в соответствии с Федеральным законом № 152-ФЗ «О персональных данных» относятся:",
                },
                {
                    type: "list",
                    item: [
                        "· определение угроз безопасности персональных данных при их обработке в информационных системах персональных данных;",
                        "· применение организационных и технических мер по обеспечению безопасности персональных данных при их обработке в информационных системах персональных данных, необходимых для выполнения требований к защите персональных данных, исполнение которых обеспечивает установленные Правительством Российской Федерации уровни защищенности персональных данных;",
                        "· применение прошедших в установленном порядке процедуру оценки соответствия средств защиты информации;",
                        "· оценка эффективности принимаемых мер по обеспечению безопасности персональных данных до ввода в эксплуатацию информационной системы персональных данных;",
                        "· обнаружение фактов несанкционированного доступа к персональным данным и принятием мер;",
                        "· восстановление персональных данных, модифицированных или уничтоженных вследствие несанкционированного доступа к ним;",
                        "· установление правил доступа к персональным данным, обрабатываемым в информационной системе персональных данных, а также обеспечением регистрации и учета всех действий, совершаемых с персональными данными в информационной системе персональных данных;",
                        "· контроль за принимаемыми мерами по обеспечению безопасности персональных данных и уровня защищенности информационных систем персональных данных;",
                        "· учет машинных носителей персональных данных;",
                        "· контроль посещения территории Индивидуального предпринимателя;",
                        "· размещение технических средств обработки персональных данных в пределах территории Индивидуального предпринимателя. Актуальная версия Политики в свободном доступе расположена в сети Интернет по адресу https://masters.hobjob.ru/policy. Все материалы данного сайта размещены на нём исключительно в информационных целях и не могут служить основанием для принятия каких-либо инвестиционных решений. Любой пользователь выражает своё согласие с тем, что ИП Нагибин Н.С. не несёт ответственность за точность и полноту представленных данных опубликованных на этом сайте. Предложения на сайте не являются публичной офертой.",
                    ],
                },
            ],
        },
    ];

    return (
        <>
            <Helmet>
                <title>Политика конфиденциальности - HobJob</title>
            </Helmet>
            <section className="policy">
                <div className="container">
                    <div className="policy-wrapper">
                        <h2 className="title__mb policy__title">
                            Политика конфиденциальности
                        </h2>
                        <div className="policy-block-wrapper">
                            {documentContent.map((item, index) => (
                                <PolicyBlock
                                    {...item}
                                    blockIndex={index}
                                    key={`policy-block-${index}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Policy;
