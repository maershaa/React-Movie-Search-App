const ActorBirthInfo = ({ birthday, deathday }) => {
  if (!birthday) return null;

  const birthDate = new Date(birthday);
  const endDate = deathday ? new Date(deathday) : new Date(); // Конечная дата: либо дата смерти, либо текущая

  const options = {
    // Форматирование даты рождения для UI
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  };
  const formattedBirthDate = birthDate.toLocaleDateString('en-US', options);

  // Возраст:
  // 1. Разница между датами в миллисекундах (при вычитании Date-объектов JS приводит их к числам (timestamp) и таким образом мы получаем разницу в миллисекундах с 1 января 1970 (Unix time))
  // 2. Перевод в годы (1000мс * 60с * 60м * 24ч * 365.25д)
  // 3. Округление вниз до целого числа при помощи Math.floor
  const age = Math.floor(
    (endDate - birthDate) / (1000 * 60 * 60 * 24 * 365.25),
  );
  return (
    <p className="details__label">
      Born: <span className="details__value ">{formattedBirthDate}</span>{' '}
      <span> ({age} years old)</span>
    </p>
  );
};
export { ActorBirthInfo };
