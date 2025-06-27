<template>
    <div class="Header">
        <!-- Bootstrap Navbar -->
         
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="/HomeView.vue"><img src="@/assets/IMG-20250623-WA0016.png" width="40"
                        height="40" class="d-inline-block align-text-top"></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <router-link to="/" class="nav-link text-red">Log Out</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/management" class="nav-link">Management</router-link>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Payroll</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Attendance</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>

<style>
.navbar a:hover {
  text-decoration: underline;
}

.navbar-brand a:hover {
  text-decoration: none;
}

</style>