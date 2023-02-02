import React, {useState} from 'react';
import SuperSelect from '../UI/SuperSelect/SuperSelect';
import SuperRadio from '../UI/SuperRadio/SuperRadio';
import styles from './Test.module.css';
import SuperCheckbox from '../UI/SuperCheckbox/SuperCheckbox';
import SuperInputText from '../UI/SuperInputText/SuperInputText';
import SuperButton from '../UI/SuperButton/SuperButton';

const options = [
    { id: 1, value: 'one' },
    { id: 2, value: 'two' },
    { id: 3, value: 'three' }
]

const Test = () => {
    const [value, onChangeOption] = useState(1)
    const [stateForCheckboxes, setChecked] = useState<boolean>(false)

    return (
        <div className={styles.testBlock}>
            <div style={{display: 'flex', flexWrap: 'wrap'}}>
                <SuperInputText value={value}/>
                <SuperSelect
                    options={options}
                    onChangeOption={onChangeOption}
                />
            </div>
            <div style={{margin: '20px 0'}}>
                <SuperRadio
                    options={options}
                    value={value}
                    onChangeOption={onChangeOption}
                />
                <SuperCheckbox
                    checked={stateForCheckboxes}
                    onChange={(e) => setChecked(e.currentTarget.checked)}
                >test</SuperCheckbox>
            </div>
            <SuperButton>BUTTON</SuperButton>
        </div>
    );
};

export default Test;