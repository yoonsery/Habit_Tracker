import HabitPresenter from '../habit_presenter';

describe('habitPresenter', () => {
  const habits = [
    { id: 1, name: 'Coding', count: 1 },
    { id: 2, name: 'Reading', count: 0 },
  ];

  let presenter;
  let update;

  beforeEach(() => {
    presenter = new HabitPresenter(habits, 3);
    update = jest.fn();
  });

  it('inits with habits', () => {
    expect(presenter.getHabits()).toEqual(habits);
  });

  it('increments habit count', () => {
    presenter.increment(habits[0], update);

    expect(presenter.getHabits()[0].count).toBe(2);
    checkUpdateIsCalled();
  });

  it('decrements habit count', () => {
    presenter.decrement(habits[0], update);

    expect(presenter.getHabits()[0].count).toBe(0);
    checkUpdateIsCalled();
  });

  it('does not set the count value below 0 when decrements', () => {
    presenter.decrement(habits[1], update);
    presenter.decrement(habits[1], update);

    expect(presenter.getHabits()[1].count).toBe(0);
  });

  it('deletes habit from the list', () => {
    presenter.delete(habits[0], update);

    expect(presenter.getHabits().length).toBe(1);
    expect(presenter.getHabits()[0].name).toBe('Reading');
    checkUpdateIsCalled();
  });

  it('adds new habit to the list', () => {
    presenter.add('Eating', update);

    expect(presenter.getHabits().length).toBe(3);
    expect(presenter.getHabits()[2].name).toBe('Eating');
    expect(presenter.getHabits()[2].count).toBe(0);
    checkUpdateIsCalled();
  });

  it('throws an error when the max habits limit is exceeded', () => {
    presenter.add('Eating', update);
    expect(() => {
      presenter.add('Sleeping', update);
    }).toThrow('The number of habits can not be more than 3');

    checkUpdateIsCalled();
  });

  describe('reset', () => {
    it('set all habits counts to 0', () => {
      presenter.reset(update);

      expect(presenter.getHabits()[0].count).toBe(0);
      expect(presenter.getHabits()[1].count).toBe(0);
      checkUpdateIsCalled();
    });

    it('does not create new object when count is 0', () => {
      const habits = presenter.getHabits();
      presenter.reset(update);
      const updatedHabits = presenter.getHabits();

      expect(updatedHabits[1]).toBe(habits[1]);
      // toEqual은 object안에 있는 data의 값을 비교하지만
      // toBe는 object의 참조값을 검사한다
    });
  });

  function checkUpdateIsCalled() {
    expect(update).toHaveBeenCalledTimes(1);
    expect(update).toHaveBeenCalledWith(presenter.getHabits());
  }
});
