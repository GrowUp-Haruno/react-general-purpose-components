// User import
import { memo } from 'react';
import { FormInterfasePropTypes, inputValueTypes } from './types/typeFormInterfase';

export const FormInterfase = memo(<T extends inputValueTypes>({
  formTitle,
  inputParts,
  inputValueState,
  handleSubmit,
  handleChange,
  buttonDesable,
  buttonName,
}: FormInterfasePropTypes<T>): JSX.Element => {
  return (
    <>
      {formTitle && <h1>{formTitle}</h1>}
      <form onSubmit={handleSubmit}>
        <div>
          {inputParts.map(({ labelName, nowSetting, inputName, inputType, inputPlaceholder }) => {
            return (
              <>
                {labelName && (
                  <label>
                    {labelName}
                    {typeof nowSetting !== 'undefined' && <span>現在の設定: {nowSetting}</span>}
                  </label>
                )}
                <input
                  name={inputName}
                  type={inputType}
                  placeholder={inputPlaceholder}
                  onChange={handleChange}
                  value={inputValueState[`${inputName}`]}
                />
              </>
            );
          })}
        </div>
        <div>
          <button disabled={buttonDesable}>{buttonName}</button>
        </div>
      </form>
    </>
  );
});
