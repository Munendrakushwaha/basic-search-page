import React, { useState, useEffect } from 'react';
import { Avatar, List, Space, Input, Select } from 'antd';
const { Search } = Input;

const data = [
    {
        "userId": 1,
        "it": 1,
        "title": "are or do repels provide blacked out except option criticizes",
        "body": "because he accepts\nundertakes the consequences of refusal and when\nhe criticizes the trouble so that the whole\nof our things are but they are the matter will happen to the architect",
        "category": "Philosophy"
    },
    {
        "userId": 1,
        "it": 2,
        "title": "who is being",
        "body": "it is in the time of life that things should be followed; no pain will blame the blessed ones; nor will they flee from the flattery of the pleasure; nor will there be any trouble to reject them; we shall not be open to them; we shall not be able to do so, but there is nothing.",
        "category": "Ethics"
    },
    {
        "userId": 1,
        "it": 3,
        "title": "she repels troubles as if she were training, whoever she is",
        "body": "and just but by what right\nthe lust of every one who chooses to be blinded, or to the\nlust of pains or accusers, who is spared\nhis pains further by his hatred and labor and wants or",
        "category": "Emotion"
    },
    {
        "userId": 1,
        "it": 4,
        "title": "and he is blinded",
        "body": "to gain any pleasure by rejecting it often\nbut it is easy to assume the fault of things\nwhoever does not know the benefits here is bound by the thing and the pain itself by right\nwhosoever wants the pleasure of things",
        "category": "Behavior"
    },
    {
        "userId": 1,
        "it": 5,
        "title": "they don't know what they hate",
        "body": "Let him seek forgiveness for repudiation, but there are other things, or let him flee, but it is, but there is pleasure, we can all be pleasures, and there is no pain or pain.",
        "category": "Emotion"
    },
    {
        "userId": 1,
        "it": 6,
        "title": "I will open them to great pain because",
        "body": "in order that the body of these people should be asperated, no one provides anything to follow\nsoftness to us some discomfort\nperceived and no one will criticize them from the accusers who\nwant pains and pains and discomforts",
        "category": "Philosophy"
    },
    {
        "userId": 1,
        "it": 7,
        "title": "but the great easy",
        "body": "may it please some with pain that the things of life are great, for who is great, who is whom, whom no one often repels, because they are to follow them, but those things which",
        "category": "Ethics"
    },
    {
        "userId": 1,
        "it": 8,
        "title": "pain is pain itself",
        "body": "I will open to the most worthy the pain that accepts him\nsome of the easy-minded ones who may be when\nhe tries to accept the great elders\nself as the comfortable pain of the pleasures of the way or of life",
        "category": "Emotion"
    },
    {
        "userId": 1,
        "it": 9,
        "title": "they do not know the right of all the pain of the times and accusers",
        "body": "the mind will not know the truth of pain, not because I will come to the fact that it is not for us, or that they provide pleasure, but pleasure",
        "category": "Philosophy"
    },
    {
        "userId": 1,
        "it": 10,
        "title": "the choice of trouble because him",
        "body": "however expedient ways with duties or great pains that are to be rejected",
        "category": "Behavior"
    },
    {
        "userId": 2,
        "it": 12,
        "title": "in some times he hates pain",
        "body": "and so it is either great\npresent because it hates both that and that pleasure and\nwise because nothing will be blinded because it destroys that pleasure\nthat is the distinction of hate",
        "category": "Emotion"
    },
    {
        "userId": 2,
        "it": 14,
        "title": "option to choose pleasure",
        "body": "we flee and accuse him of suffering pains of pleasure\nnot of pain nor of making him\nnot that he who is blessed with pains and discomforts\nbut rather let all pleasure be to him",
        "category": "Ethics"
    },
    {
        "userId": 2,
        "it": 15,
        "title": "it will happen that times",
        "body": "he reprimands those whom he pleases\nhe wills the smallest duties, he prevents the pains of repudiation, for the pleasures of refusing him the chosen one,\nthose duties he flees from life",
        "category": "Behavior"
    },
    {
        "userId": 2,
        "it": 17,
        "title": "pleasure flees but troubles provide pleasure",
        "body": "pleasure and hate them by their birth",
        "category": "Emotion"
    },
    {
        "userId": 2,
        "it": 19,
        "title": "may he be accepted or rejected who",
        "body": "he who with desire provides for a great \none but or all\ncome to achieve any greater things and\nand to find out where he is expedient to those who pleasure",
        "category": "Philosophy"
    },
    {
        "userId": 3,
        "it": 21,
        "title": "they are more difficult than the smallest pleasures because they are",
        "body": "repels some of the pain of the present with which\nbut not the whole less so\nwith no effort there are troubles pain will come here to be refused forgiveness\ntimes and holdings are expedient",
        "category": "Ethics"
    },
    {
        "userId": 3,
        "it": 22,
        "title": "I will explain why they are in pain because",
        "body": "those who take up the very thing itself or\nbut all do not hate\nthe ease of their discomfort or take up the thing\nthat prevents it from being",
        "category": "Philosophy"
    }
]
    .map((item) => {
        const titleFirstLetter = item.title.split("")[0].toUpperCase();
        const descriptionFirstLetter = item.body.split("")[0].toUpperCase();
        return {
            ...item,
            title: `${titleFirstLetter}${item.title.slice(1)}`,
            body: `${descriptionFirstLetter}${item.body.slice(1)}`
        }
    }
    );
const App = () => {
    const [columns, setColumns] = useState(data);
    useEffect(() => {
    }
        , [JSON.stringify(columns)]);


    const onSearch = (value) => {
        setColumns(data.filter((item) => item.title.includes(value) || item.body.includes(value)));
    }

    const onChange = (value) => {
        if (value === "All") {
            return setColumns(data);
        }
        setColumns(data.filter((item) => item.category === value));
    }

    return <div style={{ margin: "20px", padding: "20px" }}>
        <Space direction="vertical">
            <Search
                placeholder="input search text"
                onSearch={onSearch}
                style={{
                    width: 200,
                }}
            />
        </Space>
        <div>
            <Select
                showSearch
                placeholder="Select a Category"
                optionFilterProp="label"
                onChange={onChange}
                options={[
                    {
                        value: 'All',
                        label: 'All',
                    },
                    {
                        value: 'Philosophy',
                        label: 'Philosophy',
                    },
                    {
                        value: 'Ethics',
                        label: 'Ethics',
                    },
                    {
                        value: 'Emotion',
                        label: 'Emotion',
                    },
                    {
                        value: 'Behavior',
                        label: 'Behavior',
                    }

                ]}
            />
        </div>
        <List

            itemLayout="vertical"
            dataSource={columns}
            renderItem={(item, index) => (
                <List.Item>
                    <List.Item.Meta
                        avatar={<Avatar src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`} />}
                        title={item.title}
                        description={item.body}
                    />
                    Category: {item.category}
                </List.Item>
            )}
        />
    </div>
};
export default App;