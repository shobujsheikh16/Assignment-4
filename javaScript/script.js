//Add setStatus function for job cards
let currentFilter = 'all';

function setStatus(id, status) {
    const card = document.getElementById(id);
    if (!card) return;

    const badge = card.querySelector('.status-badge');
    
    card.setAttribute('data-status', status);
    badge.innerText = status.toUpperCase();
    const baseClasses = "status-badge text-[10px] font-bold px-3 py-1.5 rounded uppercase mb-4 inline-block tracking-wider";
    if (status === 'interview') {
        badge.className = `${baseClasses} bg-green-50 text-green-700`;
    } else if (status === 'rejected') {
        badge.className = `${baseClasses} bg-red-50 text-red-700`;
    } else {
        badge.className = `${baseClasses} bg-gray-100 text-gray-700`;
    }

    if (currentFilter !== 'all' && currentFilter !== status) {
        card.style.display = 'none';
    }
    else {
        card.style.display = 'block';
    }

    updateCounters();
    checkEmptyState(); 
}


//add removeJob function

function removeJob(id) {
    const card = document.getElementById(id);
    if (card) {
        card.remove();
        updateCounters();
        checkEmptyState();
    }
}

//job card filtering logic

function filterTab(filter) {
    currentFilter = filter;
    
    document.querySelectorAll('button[id^="btn-"]').forEach(btn => {
        btn.classList.remove('active-tab');
        btn.classList.add('bg-white', 'text-gray-500');
    });
    const activeBtn = document.getElementById('btn-' + filter);
    if (activeBtn) {
        activeBtn.classList.add('active-tab');
        activeBtn.classList.remove('text-gray-500', 'bg-white');
    }


    document.querySelectorAll('.job-card').forEach(card => {
        const status = card.getAttribute('data-status');
        if (filter === 'all' || status === filter) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });

    updateCounters();
    checkEmptyState(); 
}


//  Show message if empty 
function checkEmptyState() {
    const placeholder = document.getElementById('no-jobs-placeholder');
    if (!placeholder) return;
    const visibleCards = Array.from(document.querySelectorAll('.job-card'))
                         .filter(card => card.style.display !== 'none').length;

    if (visibleCards === 0) {
        placeholder.classList.remove('hidden');
    } else {
        placeholder.classList.add('hidden');
    }
}

//update all, interview, and rejected counts on change

function updateCounters() {
    const all = document.querySelectorAll('.job-card').length;
    const interview = document.querySelectorAll('.job-card[data-status="interview"]').length;
    const rejected = document.querySelectorAll('.job-card[data-status="rejected"]').length;

    if(document.getElementById('total-count')) document.getElementById('total-count').innerText = all;
    if(document.getElementById('interview-count')) document.getElementById('interview-count').innerText = interview;
    if(document.getElementById('rejected-count')) document.getElementById('rejected-count').innerText = rejected;

    const headerCount = document.getElementById('header-count');
    if (headerCount) {
        if (currentFilter === 'all') {
            headerCount.innerText = all;
        } else if (currentFilter === 'interview') {
            headerCount.innerText = interview;
        } else if (currentFilter === 'rejected') {
            headerCount.innerText = rejected;
        }
    }
}
//update UI state on function calls
updateCounters();
checkEmptyState();