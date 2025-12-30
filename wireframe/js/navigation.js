// Reusable Navigation Component for Kerisi Lite
// This file contains the sidebar navigation HTML and functionality

// Get the current page filename
function getCurrentPage() {
    const path = window.location.pathname;
    return path.substring(path.lastIndexOf('/') + 1) || 'dashboard.html';
}

// Check if a menu item should be active
function isActive(page) {
    return getCurrentPage() === page;
}

// Check if a submenu should be expanded
function shouldExpandSubmenu(submenuName) {
    const currentPage = getCurrentPage();
    const submenuPages = {
        'sales': ['all-sales.html', 'products-services.html', 'sales-tax.html'],
        'invoices': ['create-invoice.html', 'all-invoices.html', 'quotations.html', 'create-quotation.html'],
        'expenses': ['add-expense.html', 'all-expenses.html', 'all-vendors.html', 'all-bills.html'],
        'accounting': ['transactions.html', 'chart-of-accounts.html', 'journal-entries.html', 'reconciliation.html'],
        'customers': ['add-customer.html', 'all-customers.html', 'customer-statements.html'],
        'reports': ['profit-loss.html', 'balance-sheet.html', 'cash-flow.html', 'sales-report.html', 'tax-summary.html'],
        'billing': ['billing.html', 'payment-methods.html', 'billing-history.html'],
        'settings': ['business-settings.html', 'user-management.html', 'account-settings.html']
    };

    return submenuPages[submenuName] && submenuPages[submenuName].includes(currentPage);
}

// Generate the navigation HTML
function generateNavigation() {
    const currentPage = getCurrentPage();

    return `
        <!-- Sidebar Navigation -->
        <aside id="sidebar" class="w-64 bg-white border-r border-gray-200 flex flex-col transition-all duration-300 fixed lg:relative h-full z-30 transform -translate-x-full lg:translate-x-0">

            <!-- Logo -->
            <div class="px-6 py-5 border-b border-gray-200">
                <a href="dashboard.html" class="flex items-center gap-3">
                    <div class="w-10 h-10 bg-black text-white rounded-lg flex items-center justify-center text-xl font-bold">
                        K
                    </div>
                    <div>
                        <h1 class="text-lg font-bold text-black">Kerisi Lite</h1>
                        <p class="text-xs text-gray-500">Financial Management</p>
                    </div>
                </a>
            </div>

            <!-- Navigation Menu -->
            <nav class="flex-1 px-3 py-4 overflow-y-auto">
                <ul class="space-y-1">
                    <!-- Dashboard -->
                    <li>
                        <a href="dashboard.html" class="flex items-center gap-3 px-3 py-2.5 text-sm ${isActive('dashboard.html') ? 'font-semibold text-white bg-black' : 'font-medium text-gray-700 hover:bg-gray-100'} rounded-lg transition-colors">
                            <i class="fas fa-home w-5"></i>
                            <span>Dashboard</span>
                        </a>
                    </li>

                    <!-- Sales with Submenu -->
                    <li>
                        <button onclick="toggleSubmenu('sales')" class="w-full flex items-center justify-between px-3 py-2.5 text-sm font-medium ${shouldExpandSubmenu('sales') ? 'text-gray-700 bg-gray-100' : 'text-gray-700 hover:bg-gray-100'} rounded-lg transition-colors">
                            <div class="flex items-center gap-3">
                                <i class="fas fa-chart-line w-5"></i>
                                <span>Sales</span>
                            </div>
                            <i class="fas fa-chevron-down transition-transform" id="sales-icon" style="transform: ${shouldExpandSubmenu('sales') ? 'rotate(180deg)' : 'rotate(0deg)'};"></i>
                        </button>
                        <ul id="sales-submenu" class="${shouldExpandSubmenu('sales') ? '' : 'hidden'} mt-1 ml-8 space-y-1">
                            <li>
                                <a href="all-sales.html" class="block px-3 py-2 text-sm ${isActive('all-sales.html') ? 'font-semibold text-black bg-gray-50' : 'text-gray-600 hover:text-black hover:bg-gray-50'} rounded-lg transition-colors">
                                    All Sales
                                </a>
                            </li>
                            <li>
                                <a href="products-services.html" class="block px-3 py-2 text-sm ${isActive('products-services.html') ? 'font-semibold text-black bg-gray-50' : 'text-gray-600 hover:text-black hover:bg-gray-50'} rounded-lg transition-colors">
                                    Products & Services
                                </a>
                            </li>
                            <li>
                                <a href="sales-tax.html" class="block px-3 py-2 text-sm ${isActive('sales-tax.html') ? 'font-semibold text-black bg-gray-50' : 'text-gray-600 hover:text-black hover:bg-gray-50'} rounded-lg transition-colors">
                                    Sales Tax
                                </a>
                            </li>
                        </ul>
                    </li>

                    <!-- Invoices with Submenu -->
                    <li>
                        <button onclick="toggleSubmenu('invoices')" class="w-full flex items-center justify-between px-3 py-2.5 text-sm font-medium ${shouldExpandSubmenu('invoices') ? 'text-gray-700 bg-gray-100' : 'text-gray-700 hover:bg-gray-100'} rounded-lg transition-colors">
                            <div class="flex items-center gap-3">
                                <i class="fas fa-file-invoice-dollar w-5"></i>
                                <span>Invoices</span>
                            </div>
                            <i class="fas fa-chevron-down transition-transform" id="invoices-icon" style="transform: ${shouldExpandSubmenu('invoices') ? 'rotate(180deg)' : 'rotate(0deg)'};"></i>
                        </button>
                        <ul id="invoices-submenu" class="${shouldExpandSubmenu('invoices') ? '' : 'hidden'} mt-1 ml-8 space-y-1">
                            <li>
                                <a href="create-invoice.html" class="block px-3 py-2 text-sm ${isActive('create-invoice.html') ? 'font-semibold text-black bg-gray-50' : 'text-gray-600 hover:text-black hover:bg-gray-50'} rounded-lg transition-colors">
                                    Create Invoice
                                </a>
                            </li>
                            <li>
                                <a href="all-invoices.html" class="block px-3 py-2 text-sm ${isActive('all-invoices.html') ? 'font-semibold text-black bg-gray-50' : 'text-gray-600 hover:text-black hover:bg-gray-50'} rounded-lg transition-colors">
                                    View All Invoices
                                </a>
                            </li>
                            <li>
                                <a href="create-quotation.html" class="block px-3 py-2 text-sm ${isActive('create-quotation.html') ? 'font-semibold text-black bg-gray-50' : 'text-gray-600 hover:text-black hover:bg-gray-50'} rounded-lg transition-colors">
                                    Create Quotation
                                </a>
                            </li>
                            <li>
                                <a href="quotations.html" class="block px-3 py-2 text-sm ${isActive('quotations.html') ? 'font-semibold text-black bg-gray-50' : 'text-gray-600 hover:text-black hover:bg-gray-50'} rounded-lg transition-colors">
                                    View All Quotations
                                </a>
                            </li>
                        </ul>
                    </li>

                    <!-- Expenses with Submenu -->
                    <li>
                        <button onclick="toggleSubmenu('expenses')" class="w-full flex items-center justify-between px-3 py-2.5 text-sm font-medium ${shouldExpandSubmenu('expenses') ? 'text-gray-700 bg-gray-100' : 'text-gray-700 hover:bg-gray-100'} rounded-lg transition-colors">
                            <div class="flex items-center gap-3">
                                <i class="fas fa-receipt w-5"></i>
                                <span>Expenses</span>
                            </div>
                            <i class="fas fa-chevron-down transition-transform" id="expenses-icon" style="transform: ${shouldExpandSubmenu('expenses') ? 'rotate(180deg)' : 'rotate(0deg)'};"></i>
                        </button>
                        <ul id="expenses-submenu" class="${shouldExpandSubmenu('expenses') ? '' : 'hidden'} mt-1 ml-8 space-y-1">
                            <li>
                                <a href="add-expense.html" class="block px-3 py-2 text-sm ${isActive('add-expense.html') ? 'font-semibold text-black bg-gray-50' : 'text-gray-600 hover:text-black hover:bg-gray-50'} rounded-lg transition-colors">
                                    Add Expense
                                </a>
                            </li>
                            <li>
                                <a href="all-expenses.html" class="block px-3 py-2 text-sm ${isActive('all-expenses.html') ? 'font-semibold text-black bg-gray-50' : 'text-gray-600 hover:text-black hover:bg-gray-50'} rounded-lg transition-colors">
                                    All Expenses
                                </a>
                            </li>
                            <li>
                                <a href="all-vendors.html" class="block px-3 py-2 text-sm ${isActive('all-vendors.html') ? 'font-semibold text-black bg-gray-50' : 'text-gray-600 hover:text-black hover:bg-gray-50'} rounded-lg transition-colors">
                                    Vendors
                                </a>
                            </li>
                            <li>
                                <a href="all-bills.html" class="block px-3 py-2 text-sm ${isActive('all-bills.html') ? 'font-semibold text-black bg-gray-50' : 'text-gray-600 hover:text-black hover:bg-gray-50'} rounded-lg transition-colors">
                                    Bills
                                </a>
                            </li>
                        </ul>
                    </li>

                    <!-- Accounting with Submenu -->
                    <li>
                        <button onclick="toggleSubmenu('accounting')" class="w-full flex items-center justify-between px-3 py-2.5 text-sm font-medium ${shouldExpandSubmenu('accounting') ? 'text-gray-700 bg-gray-100' : 'text-gray-700 hover:bg-gray-100'} rounded-lg transition-colors">
                            <div class="flex items-center gap-3">
                                <i class="fas fa-wallet w-5"></i>
                                <span>Accounting</span>
                            </div>
                            <i class="fas fa-chevron-down transition-transform" id="accounting-icon" style="transform: ${shouldExpandSubmenu('accounting') ? 'rotate(180deg)' : 'rotate(0deg)'};"></i>
                        </button>
                        <ul id="accounting-submenu" class="${shouldExpandSubmenu('accounting') ? '' : 'hidden'} mt-1 ml-8 space-y-1">
                            <li>
                                <a href="transactions.html" class="block px-3 py-2 text-sm ${isActive('transactions.html') ? 'font-semibold text-black bg-gray-50' : 'text-gray-600 hover:text-black hover:bg-gray-50'} rounded-lg transition-colors">
                                    Transactions
                                </a>
                            </li>
                            <li>
                                <a href="chart-of-accounts.html" class="block px-3 py-2 text-sm ${isActive('chart-of-accounts.html') ? 'font-semibold text-black bg-gray-50' : 'text-gray-600 hover:text-black hover:bg-gray-50'} rounded-lg transition-colors">
                                    Chart of Accounts
                                </a>
                            </li>
                            <li>
                                <a href="journal-entries.html" class="block px-3 py-2 text-sm ${isActive('journal-entries.html') ? 'font-semibold text-black bg-gray-50' : 'text-gray-600 hover:text-black hover:bg-gray-50'} rounded-lg transition-colors">
                                    Journal Entries
                                </a>
                            </li>
                            <li>
                                <a href="reconciliation.html" class="block px-3 py-2 text-sm ${isActive('reconciliation.html') ? 'font-semibold text-black bg-gray-50' : 'text-gray-600 hover:text-black hover:bg-gray-50'} rounded-lg transition-colors">
                                    Reconciliation
                                </a>
                            </li>
                        </ul>
                    </li>

                    <!-- Customers with Submenu -->
                    <li>
                        <button onclick="toggleSubmenu('customers')" class="w-full flex items-center justify-between px-3 py-2.5 text-sm font-medium ${shouldExpandSubmenu('customers') ? 'text-gray-700 bg-gray-100' : 'text-gray-700 hover:bg-gray-100'} rounded-lg transition-colors">
                            <div class="flex items-center gap-3">
                                <i class="fas fa-users w-5"></i>
                                <span>Customers</span>
                            </div>
                            <i class="fas fa-chevron-down transition-transform" id="customers-icon" style="transform: ${shouldExpandSubmenu('customers') ? 'rotate(180deg)' : 'rotate(0deg)'};"></i>
                        </button>
                        <ul id="customers-submenu" class="${shouldExpandSubmenu('customers') ? '' : 'hidden'} mt-1 ml-8 space-y-1">
                            <li>
                                <a href="add-customer.html" class="block px-3 py-2 text-sm ${isActive('add-customer.html') ? 'font-semibold text-black bg-gray-50' : 'text-gray-600 hover:text-black hover:bg-gray-50'} rounded-lg transition-colors">
                                    Add Customer
                                </a>
                            </li>
                            <li>
                                <a href="all-customers.html" class="block px-3 py-2 text-sm ${isActive('all-customers.html') ? 'font-semibold text-black bg-gray-50' : 'text-gray-600 hover:text-black hover:bg-gray-50'} rounded-lg transition-colors">
                                    All Customers
                                </a>
                            </li>
                            <li>
                                <a href="customer-statements.html" class="block px-3 py-2 text-sm ${isActive('customer-statements.html') ? 'font-semibold text-black bg-gray-50' : 'text-gray-600 hover:text-black hover:bg-gray-50'} rounded-lg transition-colors">
                                    Customer Statements
                                </a>
                            </li>
                        </ul>
                    </li>

                    <!-- Reports with Submenu -->
                    <li>
                        <button onclick="toggleSubmenu('reports')" class="w-full flex items-center justify-between px-3 py-2.5 text-sm font-medium ${shouldExpandSubmenu('reports') ? 'text-gray-700 bg-gray-100' : 'text-gray-700 hover:bg-gray-100'} rounded-lg transition-colors">
                            <div class="flex items-center gap-3">
                                <i class="fas fa-file-alt w-5"></i>
                                <span>Reports</span>
                            </div>
                            <i class="fas fa-chevron-down transition-transform" id="reports-icon" style="transform: ${shouldExpandSubmenu('reports') ? 'rotate(180deg)' : 'rotate(0deg)'};"></i>
                        </button>
                        <ul id="reports-submenu" class="${shouldExpandSubmenu('reports') ? '' : 'hidden'} mt-1 ml-8 space-y-1">
                            <li>
                                <a href="profit-loss.html" class="block px-3 py-2 text-sm ${isActive('profit-loss.html') ? 'font-semibold text-black bg-gray-50' : 'text-gray-600 hover:text-black hover:bg-gray-50'} rounded-lg transition-colors">
                                    Profit & Loss
                                </a>
                            </li>
                            <li>
                                <a href="balance-sheet.html" class="block px-3 py-2 text-sm ${isActive('balance-sheet.html') ? 'font-semibold text-black bg-gray-50' : 'text-gray-600 hover:text-black hover:bg-gray-50'} rounded-lg transition-colors">
                                    Balance Sheet
                                </a>
                            </li>
                            <li>
                                <a href="cash-flow.html" class="block px-3 py-2 text-sm ${isActive('cash-flow.html') ? 'font-semibold text-black bg-gray-50' : 'text-gray-600 hover:text-black hover:bg-gray-50'} rounded-lg transition-colors">
                                    Cash Flow
                                </a>
                            </li>
                            <li>
                                <a href="sales-report.html" class="block px-3 py-2 text-sm ${isActive('sales-report.html') ? 'font-semibold text-black bg-gray-50' : 'text-gray-600 hover:text-black hover:bg-gray-50'} rounded-lg transition-colors">
                                    Sales Report
                                </a>
                            </li>
                            <li>
                                <a href="tax-summary.html" class="block px-3 py-2 text-sm ${isActive('tax-summary.html') ? 'font-semibold text-black bg-gray-50' : 'text-gray-600 hover:text-black hover:bg-gray-50'} rounded-lg transition-colors">
                                    Tax Summary
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>

                <!-- Divider -->
                <div class="my-4 border-t border-gray-200"></div>

                <!-- Settings & Billing -->
                <ul class="space-y-1">
                    <!-- Billing/Subscription with Submenu -->
                    <li>
                        <button onclick="toggleSubmenu('billing')" class="w-full flex items-center justify-between px-3 py-2.5 text-sm font-medium ${shouldExpandSubmenu('billing') ? 'text-gray-700 bg-gray-100' : 'text-gray-700 hover:bg-gray-100'} rounded-lg transition-colors">
                            <div class="flex items-center gap-3">
                                <i class="fas fa-credit-card w-5"></i>
                                <span>Billing & Subscription</span>
                            </div>
                            <i class="fas fa-chevron-down transition-transform" id="billing-icon" style="transform: ${shouldExpandSubmenu('billing') ? 'rotate(180deg)' : 'rotate(0deg)'};"></i>
                        </button>
                        <ul id="billing-submenu" class="${shouldExpandSubmenu('billing') ? '' : 'hidden'} mt-1 ml-8 space-y-1">
                            <li>
                                <a href="billing.html" class="block px-3 py-2 text-sm ${isActive('billing.html') ? 'font-semibold text-black bg-gray-50' : 'text-gray-600 hover:text-black hover:bg-gray-50'} rounded-lg transition-colors">
                                    Subscription
                                </a>
                            </li>
                            <li>
                                <a href="payment-methods.html" class="block px-3 py-2 text-sm ${isActive('payment-methods.html') ? 'font-semibold text-black bg-gray-50' : 'text-gray-600 hover:text-black hover:bg-gray-50'} rounded-lg transition-colors">
                                    Payment Methods
                                </a>
                            </li>
                            <li>
                                <a href="billing-history.html" class="block px-3 py-2 text-sm ${isActive('billing-history.html') ? 'font-semibold text-black bg-gray-50' : 'text-gray-600 hover:text-black hover:bg-gray-50'} rounded-lg transition-colors">
                                    Billing History
                                </a>
                            </li>
                        </ul>
                    </li>

                    <!-- Settings with Submenu -->
                    <li>
                        <button onclick="toggleSubmenu('settings')" class="w-full flex items-center justify-between px-3 py-2.5 text-sm font-medium ${shouldExpandSubmenu('settings') ? 'text-gray-700 bg-gray-100' : 'text-gray-700 hover:bg-gray-100'} rounded-lg transition-colors">
                            <div class="flex items-center gap-3">
                                <i class="fas fa-cog w-5"></i>
                                <span>Settings</span>
                            </div>
                            <i class="fas fa-chevron-down transition-transform" id="settings-icon" style="transform: ${shouldExpandSubmenu('settings') ? 'rotate(180deg)' : 'rotate(0deg)'};"></i>
                        </button>
                        <ul id="settings-submenu" class="${shouldExpandSubmenu('settings') ? '' : 'hidden'} mt-1 ml-8 space-y-1">
                            <li>
                                <a href="business-settings.html" class="block px-3 py-2 text-sm ${isActive('business-settings.html') ? 'font-semibold text-black bg-gray-50' : 'text-gray-600 hover:text-black hover:bg-gray-50'} rounded-lg transition-colors">
                                    Business Settings
                                </a>
                            </li>
                            <li>
                                <a href="user-management.html" class="block px-3 py-2 text-sm ${isActive('user-management.html') ? 'font-semibold text-black bg-gray-50' : 'text-gray-600 hover:text-black hover:bg-gray-50'} rounded-lg transition-colors">
                                    User Management
                                </a>
                            </li>
                            <li>
                                <a href="account-settings.html" class="block px-3 py-2 text-sm ${isActive('account-settings.html') ? 'font-semibold text-black bg-gray-50' : 'text-gray-600 hover:text-black hover:bg-gray-50'} rounded-lg transition-colors">
                                    Account Settings
                                </a>
                            </li>
                        </ul>
                    </li>

                    <li>
                        <a href="help.html" class="flex items-center gap-3 px-3 py-2.5 text-sm font-medium ${isActive('help.html') ? 'text-white bg-black' : 'text-gray-700 hover:bg-gray-100'} rounded-lg transition-colors">
                            <i class="fas fa-question-circle w-5"></i>
                            <span>Help & Support</span>
                        </a>
                    </li>
                </ul>
            </nav>

            <!-- User Profile -->
            <div class="p-4 border-t border-gray-200">
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                        JD
                    </div>
                    <div class="flex-1 min-w-0">
                        <p class="text-sm font-semibold text-black truncate">John Doe</p>
                        <p class="text-xs text-gray-500 truncate">john@example.com</p>
                    </div>
                    <button onclick="logout()" class="text-gray-400 hover:text-gray-600" title="Logout">
                        <i class="fas fa-sign-out-alt"></i>
                    </button>
                </div>
            </div>

        </aside>
    `;
}

// Initialize navigation when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Insert navigation HTML
    const navContainer = document.getElementById('nav-container');
    if (navContainer) {
        navContainer.innerHTML = generateNavigation();
    }

    // Setup mobile menu
    setupMobileMenu();
});

// Mobile Menu Toggle
function setupMobileMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');

    if (menuToggle && sidebar && overlay) {
        menuToggle.addEventListener('click', () => {
            sidebar.classList.toggle('-translate-x-full');
            overlay.classList.toggle('hidden');
        });

        overlay.addEventListener('click', () => {
            sidebar.classList.add('-translate-x-full');
            overlay.classList.add('hidden');
        });
    }
}

// Submenu Toggle Function
function toggleSubmenu(menuName) {
    const submenu = document.getElementById(menuName + '-submenu');
    const icon = document.getElementById(menuName + '-icon');

    if (submenu && icon) {
        if (submenu.classList.contains('hidden')) {
            submenu.classList.remove('hidden');
            icon.style.transform = 'rotate(180deg)';
        } else {
            submenu.classList.add('hidden');
            icon.style.transform = 'rotate(0deg)';
        }
    }
}

// Logout function
function logout() {
    if (confirm('Are you sure you want to logout?')) {
        window.location.href = 'login.html';
    }
}
