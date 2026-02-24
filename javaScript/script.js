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
    document.getElementById(id)
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