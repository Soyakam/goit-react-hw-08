import css from './HomePage.module.css';

export default function HomePage() {
  return (
    <div>
      <h1 className={css.title}>Hello! you are at home!</h1>
      <p className={css.text}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore similique praesentium sunt. Consequatur hic suscipit aperiam sit iure? Repellendus laudantium est repudiandae mollitia sequi dolore, placeat sapiente cum amet voluptate.
      </p>
    </div>
  );
}