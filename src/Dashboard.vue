<template>
    <div>



<head>

  <title></title>

<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.1/css/all.css">

</head>

<body id="page-top">

  <nav class="navbar navbar-expand navbar-dark bg-dark static-top">

    <a class="navbar-brand mr-1" href="index.html">Transcript</a>



    <!-- Navbar -->
<!--    <ul class="navbar-nav ml-auto ml-md-0">-->
<!--      <li class="nav-item dropdown no-arrow mx-1">-->
<!--        <a class="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">-->
<!--          <i class="fas fa-bell fa-fw"></i>-->
<!--          <span class="badge badge-danger">9+</span>-->
<!--        </a>-->
<!--        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="alertsDropdown">-->
<!--          <a class="dropdown-item" href="#">Action</a>-->
<!--          <a class="dropdown-item" href="#">Another action</a>-->
<!--          <div class="dropdown-divider"></div>-->
<!--          <a class="dropdown-item" href="#">Something else here</a>-->
<!--        </div>-->
<!--      </li>-->
<!--      <li class="nav-item dropdown no-arrow mx-1">-->
<!--        <a class="nav-link dropdown-toggle" href="#" id="messagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">-->
<!--          <i class="fas fa-envelope fa-fw"></i>-->
<!--          <span class="badge badge-danger">7</span>-->
<!--        </a>-->
<!--        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="messagesDropdown">-->
<!--          <a class="dropdown-item" href="#">Action</a>-->
<!--          <a class="dropdown-item" href="#">Another action</a>-->
<!--          <div class="dropdown-divider"></div>-->
<!--          <a class="dropdown-item" href="#">Something else here</a>-->
<!--        </div>-->
<!--      </li>-->
<!--      <li class="nav-item dropdown no-arrow">-->
<!--        <a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">-->
<!--          <i class="fas fa-user-circle fa-fw"></i>-->
<!--        </a>-->
<!--        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">-->
<!--          <a class="dropdown-item" href="#">Settings</a>-->
<!--          <a class="dropdown-item" href="#">Activity Log</a>-->
<!--          <div class="dropdown-divider"></div>-->
<!--          <a class="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">Logout</a>-->
<!--        </div>-->
<!--      </li>-->
<!--    </ul>-->

  </nav>

  <div id="wrapper">

    <!-- Sidebar -->
    <ul class="sidebar navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="index.html">
          <i class="fas fa-fw fa-tachometer-alt"></i>
          <span>Dashboard</span>
        </a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="pagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <i class="fas fa-fw fa-folder"></i>
          <span>Pages</span>
        </a>
        <div class="dropdown-menu" aria-labelledby="pagesDropdown">
          <h6 class="dropdown-header">Login Screens:</h6>
          <a class="dropdown-item" href="login.html">Login</a>
          <a class="dropdown-item" href="register.html">Register</a>
          <a class="dropdown-item" href="forgot-password.html">Forgot Password</a>
          <div class="dropdown-divider"></div>
          <h6 class="dropdown-header">Other Pages:</h6>
          <a class="dropdown-item" href="404.html">404 Page</a>
          <a class="dropdown-item" href="blank.html">Blank Page</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="charts.html">
          <i class="fas fa-fw fa-chart-area"></i>
          <span>Charts</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="tables.html">
          <i class="fas fa-fw fa-table"></i>
          <span>Tables</span></a>
      </li>
    </ul>

    <div id="content-wrapper">

      <div class="container-fluid">

        <!-- Breadcrumbs-->
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <a href="#">Dashboard</a>
          </li>
          <li class="breadcrumb-item active">Overview</li>
        </ol>

        <!-- Icon Cards-->
        <div class="row">
          <div class="col-xl-3 col-sm-6 mb-3">
            <div class="card text-white bg-primary o-hidden h-100">
              <div class="card-body">
                <div class="card-body-icon">
                  <i class="fas fa-fw fa-life-ring"></i>
                </div>
                <div class="mr-5">Оффер: все офферы</div>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-sm-6 mb-3">
            <div class="card text-black bg-warning o-hidden h-100">
              <div class="card-body">
                <div class="card-body-icon">
                  <i class="fas fa-fw fa-life-ring"></i>
                </div>
                <div class="mr-5">Общая длительность: {{totalDuration / 60}} мин</div>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-sm-6 mb-3">
            <div class="card text-black bg-success o-hidden h-100">
              <div class="card-body">
                <div class="card-body-icon">
                  <i class="fas fa-fw fa-life-ring"></i>
                </div>
                <div class="mr-5">Записей за сегодня: {{todayRecordsCount}}</div>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-sm-6 mb-3">
            <div class="card text-white bg-danger o-hidden h-100">
              <div class="card-body">
                <div class="card-body-icon">
                  <i class="fas fa-fw fa-life-ring"></i>
                </div>
                <div class="mr-5">Всего записей: {{recordsCount}}</div>
              </div>

            </div>
          </div>
        </div>

        <!-- DataTables Example -->
        <div class="card mb-3">
          <div class="card-header">
             <form class="ml-auto mr-0 mr-md-3 my-2 my-md-0">
               <div class="form-row">
                 <div class="col-3">
                   <label>Поиск по диалогу</label>
                   <input type="text" class="form-control" placeholder="Ключевое слово" v-model="words">
                 </div>
                 <div class="col-3">
                   <label>Поиск по Id лида</label>
                   <input type="text" class="form-control" placeholder="Id лида" v-model="leadExternalId">
                 </div>
                 <div class="col-3">
                   <label>Дата начала</label>
                   <datepicker :language="ru" v-model="dateStart" :format='customFormatter'></datepicker>
                 </div>
               </div>

               <div class="form-row">
                 <div class="col-3">
                   <label>Поиск по Id оператора</label>
                   <input type="text" class="form-control" placeholder="Id оператора" v-model="operatorId">
                 </div>
                 <div class="col-3">
                   <label>Поиск по телефону лида</label>
                   <input type="text" class="form-control" placeholder="Телефон лида" v-model="leadPhone">
                 </div>
                 <div class="col-3">
                   <label>Дата окончания</label>
                   <datepicker :language="ru" v-model="dateEnd" :format='customFormatter'></datepicker>
                 </div>
               </div>


              <div class="input-group mt-2">
                <div class="input-group-append">
                  <button class="btn btn-primary btn-success" type="button" @click="find">
                    Найти
                  </button>
                </div>
              </div>
            </form>

            </div>
          <div class="card-body">


            <AudioPlayer v-for="contact in recordingList"
                         :id="'audio'+contact.id"
                         :date="contact.date"
                         :operatorName="contact.name"
                         :clientName="contact.leadName"
                         :record='contact.recording'></AudioPlayer>


          </div>
          <div class="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
        </div>

      </div>
      <!-- /.container-fluid -->

      <!-- Sticky Footer -->
      <footer class="sticky-footer">
        <div class="container my-auto">
          <div class="copyright text-center my-auto">
            <span>Copyright © Your Website 2019</span>
          </div>
        </div>
      </footer>

    </div>
    <!-- /.content-wrapper -->

  </div>
  <!-- /#wrapper -->

  <!-- Scroll to Top Button-->
  <a class="scroll-to-top rounded" href="#page-top">
    <i class="fas fa-angle-up"></i>
  </a>

  <!-- Logout Modal-->
  <div class="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
          <button class="close" type="button" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div class="modal-body">Select "Logout" below if you are ready to end your current session.</div>
        <div class="modal-footer">
          <button class="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
          <a class="btn btn-primary" href="login.html">Logout</a>
        </div>
      </div>
    </div>
  </div>



    </body>

        </div>
</template>

<script>
    import AudioPlayer from "./AudioPlayer";
    import Datepicker from 'vuejs-datepicker';
    import {ru} from 'vuejs-datepicker/dist/locale'
    import moment from 'moment'
    export default {
        name: "Dashboard",
      components: {AudioPlayer,  Datepicker},
      data () {
        return {
          ru: ru,
          words: '',
          operatorId: '',
          leadExternalId: '',
          leadPhone: '',
          dateStart: '',
          dateEnd: ''
        }
      },
      computed: {
            recordingList() {
                return this.$store.getters.getRecordList;
            },
            recordsCount() {
              return this.$store.getters.getRecordsCount
            },
            todayRecordsCount() {
              return this.$store.getters.getTodayRecordsCount;
            },
            totalDuration() {
              return this.$store.getters.getTotalDuration;
            }

        },
        created() {
          const filter = {
            words: '',
            operatorId: '',
            leadExternalId: '',
            leadPhone: '',
            dateStart: '',
            dateEnd: ''
          }
            this.$store.dispatch('recordList', filter)
            this.$store.dispatch('recordsCount')
            this.$store.dispatch('todayRecordsCount')
            this.$store.dispatch('totalDuration')
        },
      methods: {
          customFormatter(date) {
            return moment(date).format("Y-MM-DD");
          },
        find() {

          if(this.dateStart) {
            this.startDate = moment(this.dateStart).format("Y-MM-DD");
          } else {
            this.startDate = ""
          }

          if(this.dateEnd) {
            this.dateEnd = moment(this.dateEnd).format("Y-MM-DD");
          } else {
            this.dateEnd = ""
          }

          const filter = {
            words: encodeURIComponent(this.words),
            operatorId: this.operatorId,
            leadExternalId: this.leadExternalId,
            leadPhone: this.leadPhone,
            dateStart: this.startDate,
            dateEnd: this.dateEnd
          }

          if(this.words) {
            this.$store.dispatch('findRecord', filter)
          } else {
            this.$store.dispatch('recordList')
          }
        }
      }
    }
</script>


<style>

</style>
