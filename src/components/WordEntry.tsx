import React from 'react';
import PropTypes, { InferProps } from 'prop-types';

import cx from 'classnames';
import cn from 'styles/WordEntry.module.scss';

function WordEntry({
  id,
  word,
  comment,
  addingMode
}: InferProps<typeof WordEntry.propTypes>) {
  return (
    <div className={cn['MainWrapper']}>
      <div className={cn['WordForm']}>

        <div className={cn['WordForm__TextAreasWrapper']}>
          <div className={cn['TextAreaWrapper']}>
            <textarea
              className={cn['WordForm__TextArea']}
              defaultValue={word}
            />
          </div>
          <div className={cn['TextAreaWrapper']}>
            <textarea
              className={cn['WordForm__TextArea']}
              defaultValue={comment}
            />
          </div>
        </div>

        <div className={cn['WordForm__ButtonsWrapper']}>
          {addingMode
            ? null
            : (
              <div className={cn['ButtonWrapper']}>
                <button
                  className={cx(
                    cn['WordForm__Button'],
                    cn['WordForm__Button--WithTooltip'],
                    cn['WordForm__Button--FixedHeight']
                  )}
                  type='button'
                  data-tooltip='Save changes'
                >
                  <span role='img' aria-label='Save button'>💾</span>
                </button>
              </div>
            )}

          {addingMode
            ? null
            : (
              <div className={cn['ButtonWrapper']}>
                <button
                  className={cx(
                    cn['WordForm__Button'],
                    cn['WordForm__Button--WithTooltip'],
                    cn['WordForm__Button--FixedHeight']
                  )}
                  type='button'
                  data-tooltip='Remove the word'
                >
                  <span role='img' aria-label='Remove button'>❌</span>
                </button>
              </div>
            )}

          {addingMode
            ? (
              <div className={cn['ButtonWrapper']}>
                <button
                  className={cx(
                    cn['WordForm__Button'],
                    cn['WordForm__Button--FixedWidth'],
                    cn['WordForm__Button--FixedHeight']
                  )}
                  type='button'
                >
                  Add
                </button>
              </div>
            )
            : null}
        </div>

      </div>
    </div>
  );
}

WordEntry.propTypes = {
  id: PropTypes.number,
  word: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
  addingMode: PropTypes.bool.isRequired
};

WordEntry.defaultProps = {
  id: 0
};

export default WordEntry;
