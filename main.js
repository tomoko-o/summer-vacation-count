'use strict';
{
  const today = new Date();
  const summerSchoolDay = new Date(2024, 7, 20, 0, 0, 0).getTime() - today; 
  const newTermDay = new Date(2024, 8, 5, 0, 0, 0).getTime() - today; 
  
  const summerDays = Math.floor(summerSchoolDay / 1000 / 60 / 60 / 24) + 1;
  const newDays = Math.floor(newTermDay / 1000 / 60 / 60 / 24) + 1;

  const summerDaysText = document.getElementById('summer-days');
  const summerText = document.getElementById('summer-school');
  if (summerDays > 0) {
    summerText.textContent = '夏季保育まであと';
    summerDaysText.textContent = `${summerDays} 日`;
  } else {
    if (summerDays < -4) {
      summerText.textContent = '夏季保育終了…';
      summerDaysText.textContent = '';
    } else {
      summerText.textContent = '夏季保育終了まで';
      const hours = today.getHours();      
      if (hours < 12) {
        summerDaysText.textContent = `${5 - Math.abs(summerDays)} 日`;
      } else {
        if (summerDays == -4) {
          summerText.textContent = '夏季保育終了…';
        } else {
          summerDaysText.textContent = `${5 - Math.abs(summerDays) - 1} 日`;
        }
      }
    }
  }

  document.getElementById('new-term').textContent = `${newDays} 日`;

  const days = ['日', '月', '火', '水', '木', '金', '土'];
  const month = today.getMonth() + 1;
  const date = String(today.getDate()).padStart(2, '0');
  const day = days[today.getDay()];
  document.getElementById('today').textContent = `${month}月 ${date}日 (${day})`;

}