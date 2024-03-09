import styles from './ui.module.scss';

/* eslint-disable-next-line */
export interface UiProps {}

export function Ui(props: UiProps) {
  return (
    <>
      {' '}
      <div className={styles['container']}>
        <h1 className="text-red-500">Welcome to Ui!</h1>
      </div>
      <div className="text-orange-500">45454</div>
    </>
  );
}

export default Ui;
