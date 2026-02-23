let interViewList = [];
let rejectedList = [];

const totalCount = document.getElementById('total');
const interViewCount = document.getElementById('interview-count');
const rejectedCount = document.getElementById('reject-count');

const allCards = document.getElementById('allCards');
const filteredSection = document.getElementById('filtered-section');

const allFilterBtn = document.getElementById('all-filter-btn');
const interViewFilterBtn = document.getElementById('interview-filter-btn');
const rejectedFilterBtn = document.getElementById('rejected-filter-btn');

function calculateCount() {
  totalCount.innerText = allCards.children.length;
  interViewCount.innerText = interViewList.length;
  rejectedCount.innerText = rejectedList.length;
}

calculateCount();

function toggleStyle(id) {
  [allFilterBtn, interViewFilterBtn, rejectedFilterBtn].forEach(btn => {
    btn.classList.remove('bg-[#3B82F6]', 'text-white');
    btn.classList.add('bg-[#F1F2F4]', 'text-gray-500');
  });

  const clickedBtn = document.getElementById(id);
  clickedBtn.classList.add('bg-[#3B82F6]', 'text-white');
  clickedBtn.classList.remove('bg-[#F1F2F4]', 'text-gray-500');

  if (id === 'all-filter-btn') {
    allCards.style.display = 'block';
    filteredSection.innerHTML = '';
  }

  if (id === 'interview-filter-btn') {
    allCards.style.display = 'none';
    renderCards(interViewList, 'interview');
  }

  if (id === 'rejected-filter-btn') {
    allCards.style.display = 'none';
    renderCards(rejectedList, 'rejected');
  }
}

document.querySelector('main').addEventListener('click', function (event) {
  if (
    event.target.innerText !== 'Interview' &&
    event.target.innerText !== 'Rejected'
  )
    return;

  const card = event.target.closest('.rounded-2xl');
  const statusBtn = card.querySelector(
    '.bg-gray-200, .bg-green-200, .bg-red-200',
  );

  const cardInfo = getCardInfo(card);

  interViewList = interViewList.filter(
    item => item.jobName !== cardInfo.jobName,
  );
  rejectedList = rejectedList.filter(item => item.jobName !== cardInfo.jobName);

  if (event.target.innerText === 'Interview') {
    interViewList.push(cardInfo);

    statusBtn.innerText = 'Interview';
    statusBtn.className =
      'text-[14px] font-medium bg-green-200 text-green-700 p-2 mb-2 rounded shadow cursor-pointer';
  }

  if (event.target.innerText === 'Rejected') {
    rejectedList.push(cardInfo);

    statusBtn.innerText = 'Rejected';
    statusBtn.className =
      'text-[14px] font-medium bg-red-200 text-red-700 p-2 mb-2 rounded shadow cursor-pointer';
  }

  calculateCount();

  if (allCards.style.display === 'none') {
    if (interViewFilterBtn.classList.contains('bg-[#3B82F6]')) {
      renderCards(interViewList, 'interview');
    }
    if (rejectedFilterBtn.classList.contains('bg-[#3B82F6]')) {
      renderCards(rejectedList, 'rejected');
    }
  }
});

function getCardInfo(card) {
  return {
    jobName: card.querySelector('h2')?.innerText || '',
    jobTitle: card.querySelectorAll('p')[0]?.innerText || '',
    jobMoney: card.querySelectorAll('p')[1]?.innerText || '',
    notesDescription: card.querySelectorAll('p')[2]?.innerText || '',
  };
}

function renderCards(list, type) {
  filteredSection.innerHTML = '';

  list.forEach(item => {
    const div = document.createElement('div');

    div.className =
      'bg-[#F1F2F4] rounded-2xl shadow p-4 mb-3 border border-amber-200';

    div.innerHTML = `
      <h2 class="text-2xl font-bold mb-1">${item.jobName}</h2>
      <p class="text-gray-500 mb-2">${item.jobTitle}</p>
      <p class="text-gray-500 mb-2">${item.jobMoney}</p>

      <button class="text-[14px] font-medium ${
        type === 'interview'
          ? 'bg-green-200 text-green-700'
          : 'bg-red-200 text-red-700'
      } p-2 mb-2 rounded shadow">
        ${type === 'interview' ? 'Interview' : 'Rejected'}
      </button>

      <p class="text-gray-500">${item.notesDescription}</p>
    `;

    filteredSection.appendChild(div);
  });
}

function renderCards(list, type) {
  filteredSection.innerHTML = '';

  if (list.length === 0) {
    filteredSection.innerHTML = `
      <div class="max-w-[1110px] min-h-[400px] mx-auto bg-white border border-gray-200 rounded-lg flex flex-col items-center justify-center p-10 text-center my-6">
        <div class="mb-6">
          <img src="./jobs.png" alt="No jobs" class="w-24 h-24 object-contain">
        </div>
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">No jobs available</h2>
        <p class="text-gray-500">Check back soon for new job opportunities</p>
      </div>
    `;
    return;
  }

  list.forEach(item => {
    const div = document.createElement('div');
    div.className =
      'bg-[#F1F2F4] rounded-2xl shadow p-4 mb-3 border border-amber-200';

    div.innerHTML = `
      <h2 class="text-2xl font-bold mb-1">${item.jobName}</h2>
      <p class="text-gray-500 mb-2">${item.jobTitle}</p>
      <p class="text-gray-500 mb-2">${item.jobMoney}</p>
      <button class="text-[14px] font-medium ${
        type === 'interview'
          ? 'bg-green-200 text-green-700'
          : 'bg-red-200 text-red-700'
      } p-2 mb-2 rounded shadow">
        ${type === 'interview' ? 'Interview' : 'Rejected'}
      </button>
      <p class="text-gray-500">${item.notesDescription}</p>
    `;
    filteredSection.appendChild(div);
  });
}


document.querySelector('main').addEventListener('click', function (event) {
  
  const deleteBtn = event.target.closest('.fa-trash-can');

  if (deleteBtn) {
    
    const confirmDelete = confirm(
      'Hello JavaScript',
    );

    if (confirmDelete) {
      
      const card = deleteBtn.closest('.rounded-2xl');
      const jobName = card.querySelector('h2').innerText; 

      
      interViewList = interViewList.filter(item => item.jobName !== jobName);
      rejectedList = rejectedList.filter(item => item.jobName !== jobName);

      
      card.remove();

      
      calculateCount();

      
      if (allCards.style.display === 'none') {
        const currentType = interViewFilterBtn.classList.contains('text-white')
          ? 'interview'
          : 'rejected';
        const currentList =
          currentType === 'interview' ? interViewList : rejectedList;
        renderCards(currentList, currentType);
      }
    }
  }
});
