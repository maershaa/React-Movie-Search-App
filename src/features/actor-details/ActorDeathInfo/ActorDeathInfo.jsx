const ActorDeathInfo = ({ deathday }) => {
  if (!deathday) return null;

  // Опции форматирования даты:
  // year/month/day — указываем, как отображать части даты
  // 'numeric' → число (2020, 5)
  // 'long' → полный текст (например "May")
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  const deathDate = new Date(deathday); // Преобразуем строку даты в объект Date
  // внутри она хранится как число (миллисекунды с 1970 года)

  const formattedDeathDate = deathDate.toLocaleDateString('en-US', options); // Преобразуем дату в строку с учётом локали ('en-US')
  // и заданного формата из options→ "September 11, 2001"

  return (
    <p className="details__label">
      Dead: <span className="details__value ">{formattedDeathDate}</span>
    </p>
  );
};
export { ActorDeathInfo };
