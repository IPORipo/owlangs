@extends('admin.layouts.master')

@section('title')
   Reviews
@endsection

@section('content')
<div class="page-wrapper">
    <div class="container-fluid">
        <div class="row page-titles">
            <div class="col-md-5 align-self-center">
                <h3 class="text-themecolor">Reviews</h3>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-12">
                <div class="card">
                    <div class="card-body">
                        <div class="tab-content" id="myTabContent">
                            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <div class="table-responsive">
                                    <div class="table-header d-flex justify-content-start">
                                        <div class="form-group d-flex">
                                            <table class="table">
                                                <thead>
                                                <tr>
                                                    <th>ID</th>
                                                    <th>User</th>
                                                    <th>Text</th>
                                                    <th>Rate</th>
                                                    <th>Created</th>
                                                    <th>Pinned</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                @foreach($reviews as $review)
                                                    <tr>
                                                        <td>{{$review->id}}</td>
                                                        <td>{{$review->user->name}}</td>
                                                        <td>{{$review->text}}</td>
                                                        <td>{{$review->rate}}</td>
                                                        <td>{{$review->created_at->diffForHumans()}}</td>
                                                        <td>
                                                            <input id='{{$review->id}}' type="checkbox" @if($review->pinned == 1) checked @endif>
                                                        </td>
                                                    </tr>
                                                @endforeach
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
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
    <script>
        jQuery(document).ready(function($){
            $('input').on('change',function(e){
                $.ajax({
                    type:"POST",
                    url:"{{route('review_pinned')}}",
                    data:{pinned:($(e.target).is(":checked"))?1:0,id:$(e.target).attr('id'),_token:'{{csrf_token()}}'},
                });
            });
        });
    </script>
</div>
@endsection