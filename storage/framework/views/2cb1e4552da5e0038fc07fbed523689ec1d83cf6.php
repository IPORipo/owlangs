<?php $__env->startSection('title'); ?>
  Contact
<?php $__env->stopSection(); ?>

<?php $__env->startSection('content'); ?>


<div class="page-wrapper">
    <div class="container-fluid">
        <div class="row page-titles">
            <div class="col-md-5 align-self-center">
                <h3 class="text-themecolor">Contact</h3>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-12">
                <div class="card">
                    <div class="card-body">
                        <ul class="nav nav-tabs" id="myTab" role="tablist">
                            <li class="nav-item">
                                <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Messages</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Contact Information</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Contact</a>
                            </li>
                        </ul>
                        <div class="tab-content" id="myTabContent">
                            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <div class="table-responsive">
                                    <div class="table-header d-flex justify-content-start">
                                        <div class="form-group d-flex">
                                            <div class="col-sm-12 d-flex">
                                                <select id="select_month"  class="form-control form-control-line">
                                                    <option value = 13 > month</option>
                                                    <?php for($i = date('m') ; $i != date('m') - 12 ; $i--): ?>
                                                    <option value = <?php echo e($i); ?>> <?php echo e(date('F',mktime(0,0,0,$i) )); ?></option>
                                                    <?php endfor; ?>
                                                </select>
                                            </div>
                                            <div class="col-sm-12 d-flex">
                                                <button id ="deletemessage" class="btn waves-effect waves-light btn-danger ">Delete Marked</button>
                                            </div>
                                        </div>
                                    </div>
                                    <table class="table">
                                        <thead>
                                            <tr>
                                                <th>
                                                    <input id='head_check_box' type="checkbox"> 
                                                </th>
                                                <th><a href="<?php echo e(route('contact')); ?>">#</a></th>
                                                <th>Name</th>
                                                <th>Email</th>
                                                <th>Subject</th>
                                                <th>Message</th>
                                                <th>Date</th>
                                            </tr>
                                        </thead>
                                        <tbody id = "table_body">
                                        </tbody>
                                    </table>
                                    <button id = "show_more">show more</button>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                <form class="form-horizontal form-material" action="<?php echo e(route('updateAdmin')); ?>" method="post"> 
                                    <div class="form-group">
                                        <label class="col-md-12">Admin mail</label>
                                        <div class="col-md-12">
                                            <input type="text" placeholder="admin@mail.com" class="form-control form-control-line" name="email" value=<?php echo e($contact['admin-mail']); ?>>
                                        </div>
                                        <div class="form-group">
                                            <label for="example-email" class="col-md-12">Company Name</label>
                                            <div class="col-md-12">
                                                <input type="text" placeholder="company name" class="form-control form-control-line" name="company-name" id="example-email" value="<?php echo e($contact['company-name']); ?>">
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label class="col-md-12">Address</label>
                                            <div class="col-md-12">
                                                <input type="text" name="address" placeholder="address" class="form-control form-control-line" value="<?php echo e($contact['address']); ?>">
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label class="col-md-12">Tax Number</label>
                                            <div class="col-md-12">
                                                <input type="text" placeholder="Tax Number" name="tax" class="form-control form-control-line" value="<?php echo e($contact['tax']); ?>">
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label class="col-md-12">Phone</label>
                                            <div class="col-md-12">
                                                <input type="text"  name="phone" placeholder="phone" class="form-control form-control-line" value="<?php echo e($contact['phone']); ?>">
                                                <?php echo e(csrf_field()); ?>

                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="col-sm-12">
                                                <button class="btn btn-success" type="submit">Update Profile</button>
                                            </div>
                                        </div>
                                    </form>
                                    </div>
                                    <div class="tab-pane fade" id="message" role="tabpanel" aria-labelledby="profile-tab">
                                        <div class="card-body">
                                            <h4 class="card-title"><span class="lstick"></span> Message sender</h4>
                                            <h6>Subject</h6>
                                            <div class="date">sent: 07/12/2017</div>
                                            <div class="message-text">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum mollitia nobis cum. Assumenda dignissimos adipisci nam itaque, commodi in temporibus quidem at aliquam natus modi, accusamus alias. Autem, similique error.
                                            </div>
                                            <div class="message-footer">
                                                <button class="btn waves-effect waves-light btn-danger pull-right">Delete</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <footer class="footer">
        © 2017 Admin Pro by wrappixel.com
    </footer>
</div>
</div>
    <script>
        window.contact_counter = 0;
        jQuery(document).ready(function($){
            $('#head_check_box').on('click',function(e){
                bool = $(e.target).is(":checked");
                console.log(bool);
                array = $('body').find('input[type=checkbox]');
                for(i=0;i<array.length;i++){
                    $(array[i]).attr("checked",bool);
                }
            });
            $('#deletemessage').on('click',function(){
                array = $('body').find('input[type=checkbox]:checked');
                if(array.length == 0)
                    return;
                if(array[0].id == 'head_check_box')
                    array.splice(0,1);
                result = [];
                window.contact_counter-=array.length;
                for(i = 0; i < array.length ;i++ ){
                    result.push(array[i].id);
                }
                $.post("<?php echo e(route('deletecontact')); ?>", {_token:'<?php echo e(csrf_token()); ?>',result:result},function(data){
                    for(i = 0; i < array.length ;i++ ){
                        $(array[i]).parent().parent().remove();
                    }
                });
            });
            $('#select_month').on('change',function(e){
                getMessage($(e.target).val(),-10);
            });
            $('#show_more').on('click',function(e){
                getMessage($('#select_month').val(),contact_counter);
            });
            function getMessage(e,i){
                contact_counter = i += 10;
                console.log(e,i);
                $.ajax({
                    url: "<?php echo e(route('getcontact')); ?>",
                    data: {month : e,i:i},
                    success:function(data){
                        contacts = JSON.parse(data);
                        tb = $('#table_body');
                        if(i==0)
                            tb.text('');
                        for(i=0;i<contacts.length;i++){
                            tr = $('<tr>');
                            td = $('<td>');
                            td.append($("<input type ='checkbox' >").attr("id",contacts[i]['id']));
                            tr.append(td);
                            tr.append($('<td>').text(contacts[i]['id']));
                            tr.append($('<td>').text(contacts[i]['name']));
                            tr.append($('<td>').text(contacts[i]['email']));
                            tr.append($('<td>').text(contacts[i]['subject']));
                            tr.append($('<td>').text(contacts[i]['message']));
                            tr.append($('<td>').text(contacts[i]['readable']));
                            tb.append(tr);
                        }
                    },
                });
            }
            getMessage(13,-10);
        });
    </script>
<?php $__env->stopSection(); ?>
<?php echo $__env->make('admin.layouts.master', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>